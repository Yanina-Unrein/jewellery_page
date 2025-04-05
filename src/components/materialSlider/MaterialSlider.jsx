import { useState, useEffect, useRef } from "react";
import "./materialSlider.css";

const MaterialSlider = ({ materials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isSliderActive, setIsSliderActive] = useState(false);
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);
  const resizeTimeout = useRef(null);

  const calculateDimensions = () => {
    const screenWidth = window.innerWidth;
    const useSlider = screenWidth < 600; // Cambiado a 768px como breakpoint estándar
    setIsSliderActive(useSlider);

    if (!useSlider || !sliderRef.current) return;

    const container = sliderRef.current;
    const containerWidth = container.offsetWidth;
    const containerPadding = parseInt(window.getComputedStyle(container).paddingLeft) * 2;
    const availableWidth = containerWidth - containerPadding;

    let newSlidesPerView = 1;
    let newSlideWidth = availableWidth * 0.9; // 90% del ancho disponible

    if (availableWidth >= 480) {
      newSlidesPerView = 1.2;
      newSlideWidth = (availableWidth - 30) / 1.2; // Restamos espacio para el gap
    }

    setSlidesPerView(newSlidesPerView);
    setSlideWidth(newSlideWidth);
    setCurrentIndex(0);
  };

  useEffect(() => {
    const handleResize = () => {
      clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(calculateDimensions, 100);
    };

    calculateDimensions();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout.current);
    };
  }, []);

  const goToSlide = (index) => {
    const maxIndex = Math.max(0, materials.length - Math.floor(slidesPerView));
    setCurrentIndex(Math.min(Math.max(index, 0), maxIndex));
  };

  // Manejo de touch events para el slider
  const handleTouchStart = (e) => {
    e.stopPropagation();
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
    if (trackRef.current) {
      trackRef.current.style.transition = 'none';
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (trackRef.current) {
      trackRef.current.style.transition = '';
    }

    const deltaX = touchStartX.current - touchEndX.current;
    if (deltaX > 50) {
      goToSlide(currentIndex + 1);
    } else if (deltaX < -50) {
      goToSlide(currentIndex - 1);
    }
  };

  return (
    <div 
      ref={sliderRef} 
      className={`materials-wrapper ${isSliderActive ? "slider-mode" : "grid-mode"}`}
    >
      {isSliderActive ? (
        <>
          <div 
            className="materials-slider-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="materials-slider-track"
              ref={trackRef}
              style={{ 
                transform: `translateX(-${currentIndex * (slideWidth + 16)}px)`,
                width: `${materials.length * (slideWidth + 16)}px`
              }}
            >
              {materials.map((material, index) => (
                <div 
                  key={index} 
                  className="material-slide" 
                  style={{ width: `${slideWidth}px` }}
                >
                  <div className="material-card">
                    <h3>{material.title}</h3>
                    <p>{material.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="materials-slider-dots">
            {[...Array(Math.max(1, materials.length - Math.floor(slidesPerView) + 1))].map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="materials-grid">
          {materials.map((material, index) => (
            <div key={index} className="material-card">
              <h3>{material.title}</h3>
              <p>{material.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MaterialSlider;
