import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CardWide from './CardWide';

export default function Featured() {
  const blogs = useSelector((state) => state.blog.blogs);
  const filteredPost = blogs.filter((blog) => blog.featured === true);
  

  return (
    <div data-testid="featured" className="container">
      <section className="featured-sc bg-white">
        {filteredPost.map((blogItem) => (<CardWide blogItemData={blogItem} key={blogItem.id} />))}
      </section>
    </div>
  );
}
