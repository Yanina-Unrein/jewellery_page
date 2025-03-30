import { useState, useEffect, useRef } from "react";
import CardReference from "../cardReference/CardRefence";
import { images } from "../../data/images"; 
import "./carrousel.css";

const Carousel = ({ translations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
      setCurrentIndex(0);
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const goToSlide = (index) => {
    const maxIndex = Math.max(0, images.length - slidesPerView); // Calcula el índice máximo
    if (index >= 0 && index <= maxIndex) {
      setCurrentIndex(index);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    if (deltaX > 50) {
      goToSlide(currentIndex + 1);
    } else if (deltaX < -50) {
      goToSlide(currentIndex - 1);
    }
  };

  return (
    <div className="cards-container">
      <div
        className="slider-container"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
        >
          {images.map((image, index) => (
            <div 
              key={index} 
              className="slide" 
              style={{ width: `${100 / slidesPerView}%` }} // Ancho dinámico sin flex
            >
              <CardReference altimg={`Testimonio ${index + 1}`} image={image} />
            </div>
          ))}
        </div>
      </div>

      {/* Bullets */}
      <ul className="home-carousel-bullets">
        {[...Array(images.length - slidesPerView + 1)].map((_, index) => (
          <li
            key={index}
            className={index === currentIndex ? "activeSlide" : ""}
            onClick={() => goToSlide(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;

