import { useState, useRef } from 'react';
import './jewelryCarousel.css';

const JewelryCarousel = () => {
    const images = Array.from({ length: 13 }, (_, i) => `/carrousel/image-${i + 1}.webp`);
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const goToNext = (e) => {
        if (e?.preventDefault) e.preventDefault(); 
        setCurrentIndex(prev => (prev + 1) % images.length);
    };

    const goToPrev = (e) => {
        if (e?.preventDefault) e.preventDefault();
        setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
    };

  // Swipe solo en móvil
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 30) goToNext();
    else if (diff < -30) goToPrev();
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div className="carousel-container">
      {/* Mobile view */}
      <div
        className="mobile-view"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="main-image-container">
          <img
            src={images[currentIndex]}
            alt={`Joya ${currentIndex + 1}`}
            className="main-image"
            draggable="false"
          />
        </div>
        <div className="mobile-controls">
          <button onClick={goToPrev} className="nav-button" aria-label="Anterior">‹</button>
          <button onClick={goToNext} className="nav-button" aria-label="Siguiente">›</button>
        </div>
      </div>

      {/* Tablet view */}
      <div className="tablet-view">
        <button onClick={goToPrev} className="nav-button tablet-nav" aria-label="Anterior">‹</button>
        <div className="image-group">
          <img
            src={images[(currentIndex - 1 + images.length) % images.length]}
            alt="Anterior"
            className="side-image prev-image"
            draggable="false"
          />
          <img
            src={images[currentIndex]}
            alt={`Joya ${currentIndex + 1}`}
            className="main-image"
            draggable="false"
          />
          <img
            src={images[(currentIndex + 1) % images.length]}
            alt="Siguiente"
            className="side-image next-image"
            draggable="false"
          />
        </div>
        <button onClick={goToNext} className="nav-button tablet-nav" aria-label="Siguiente">›</button>
      </div>
    </div>
  );
};

export default JewelryCarousel;
