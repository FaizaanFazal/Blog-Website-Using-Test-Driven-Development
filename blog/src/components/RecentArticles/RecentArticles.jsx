import React from 'react'
import Card from './Card'
import {blogs} from '../../data/blog-posts'

export default function RecentArticles() {
  return (
    <section className="recent-sc">
    <div className="container">
      <div className="recent-content">
        <div className="section-head flex items-end justify-between">
          <div className="sc-head-l">
            <h4 className="title title-lg">Recent Articles</h4>
            <p className="text text-base">
              Here&apos;s what we&apos;ve been up to recently.
            </p>
          </div>
          <div className="sc-head-r">
            <button type="button" className="btn btn-o-primary">
              View all
              <span className="btn-icon">
                <i className="bi bi-arrow-right"></i>
              </span>
            </button>
          </div>
        </div>

        <div className="card-list grid-cols grid-cols-3">
          {
            blogs.slice(3, 6).map(blogItem => {
              return (<Card blogItemData = {blogItem} isCardSm = { true } key = {blogItem.id} />)
            })
          }
        </div>
      </div>
    </div>
  </section>
  )
}
