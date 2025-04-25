import React from 'react';
import './WorkCard.css';


function WorkCard({ image, title, year, category, text }) {
  return (
    <div className="work-card">
      <img src={image} alt={title} className="work-card-image" />
      <div className="work-card-content">
        <h3 className="work-card-title">{title}</h3>
        <p className="work-card-meta">{year} | {category}</p>
        <p className="work-card-text">{text}</p>
      </div>
    </div>
  );
}

export default WorkCard;