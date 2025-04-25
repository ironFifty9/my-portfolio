import React from 'react';
import './RecentPosts.css';
import PostCard from './PostCard';

function RecentPosts({ posts }) {
  return (
    <section className="recent-posts">
      <div className="recent-posts-header">
        <h2 className="recent-posts-title">Recent posts</h2>
        <a href="#" className="recent-posts-link">View all</a>
      </div>
      <div className="recent-posts-grid">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
}

export default RecentPosts;