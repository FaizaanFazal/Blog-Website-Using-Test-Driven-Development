import React from 'react';
import { useSelector } from 'react-redux';
import CardWide from './CardWide';

export default function Featured() {
  const featured = useSelector((state) => state.blog.featured);

  return (
    <div role="featured" className="container">
      <section className="featured-sc bg-white">
        {featured.map((blogItem) => (<CardWide blogItemData={blogItem} key={blogItem.id} />))}

      </section>
    </div>
  );
}
