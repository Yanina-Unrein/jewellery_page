import React from 'react';
import "./cardReference.css";

const CardReference = ({ image, altimg }) => {
  return (
    <div className="card">
      <img src={image} alt={altimg} loading="lazy" />
    </div>
  );
};

export default CardReference;
