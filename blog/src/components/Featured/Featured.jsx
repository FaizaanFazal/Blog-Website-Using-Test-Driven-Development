import React from 'react'
import CardWide from './CardWide'
import {useSelector} from 'react-redux'


export default function Featured() {

  const featured=useSelector(state=>state.blog.featured);

  return (
    <div role='featured' className="container">
        <section className="featured-sc bg-white">
        {featured.map(blogItem =>(<CardWide blogItemData = {blogItem}/>))}
       
        </section>
      </div>
  )
}
