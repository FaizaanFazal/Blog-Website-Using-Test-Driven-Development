import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

export default function RecentArticles() {
  const recentArticles = useSelector((state) => state.blog.recentArticles);

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
              <Link type="button" className="btn btn-o-primary" to="/blogs/recent">
                View all
                <span className="btn-icon">
                  <i className="bi bi-arrow-right" />
                </span>
              </Link>
            </div>
          </div>

          <div className="card-list grid-cols grid-cols-3">
            {
            recentArticles?.map((blogItem) => (
              <Card blogItemData={blogItem} isCardSm key={blogItem.id} />
            ))
          }
          </div>
        </div>
      </div>
    </section>
  );
}
