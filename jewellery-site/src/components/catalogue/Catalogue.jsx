import { useState, useEffect } from "react";
import "./catalogue.css";

const Catalogue = ({ translations }) => {
  if (!translations || !translations.catalogue) {
    return <p>Error: No se encontraron las traducciones.</p>;
  }

  const { catalogue } = translations;
  const categories = catalogue.categories;
  const descriptions = catalogue.descriptions;

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages(activeCategory);
  }, [activeCategory]);

  const fetchImages = async (category) => {
    try {
      const response = await fetch(`/api/images/${category.toLowerCase().replace(/\s+/g, "")}`);
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error al cargar imágenes:", error);
    }
  };

  return (
    <div className="jewelry-categories">
      <h2>{catalogue.title}</h2>
      <p>{catalogue.paragraph}</p>

      <div className="categories-container">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="category-description">{descriptions[activeCategory]}</p>

      <div className="gallery">
        {images.length > 0 ? (
          images.map((image, index) => (
            <img key={index} src={image} alt={activeCategory} loading="lazy" />
          ))
        ) : (
          <p>No hay imágenes disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Catalogue;

