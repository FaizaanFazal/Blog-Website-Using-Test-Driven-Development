import React from 'react'
import CardWide from './CardWide'
import { blogs } from "../../data/blog-posts";

export default function Featured() {
  return (
    <div role='featured' className="container">
        <section className="featured-sc bg-white">
          <CardWide blogItemData = { blogs} />
        </section>
      </div>
  )
}
