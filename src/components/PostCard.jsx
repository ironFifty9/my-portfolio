import React from 'react';
import './PostCard.css';

function PostCard({ title, date, category, text }) {
  return (
    <div className="post-card">
      <h3 className="post-card-title">{title}</h3>
      <p className="post-card-meta">{date} | {category}</p>
      <p className="post-card-text">{text}</p>
    </div>
  );
}

export default PostCard;