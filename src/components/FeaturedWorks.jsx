import React from 'react';
import './FeaturedWorks.css';
import WorkCard from './WorkCard';

function FeaturedWorks({ works }) {
  return (
    <section className="featured-works">
      <h2 className="featured-works-title">Featured works</h2>
      <div className="featured-works-list">
        {works.map((work, index) => (
          <WorkCard key={index} {...work} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedWorks;