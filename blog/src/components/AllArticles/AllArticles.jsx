import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

export default function AllArticles() {
  const allArticles = useSelector((state) => state.blog.blogs);

  return (
    <section className="all-sc">
      <div className="container">
        <div className="popular-content">
          <div className="section-head flex items-end justify-between">
            <div className="sc-head-l">
              <h4 className="title title-lg">All Articles</h4>
              <p className="text text-base">
                We share common trends, strategies ideas, opinions, short & long stories from the team behind company.
              </p>
            </div>
            <div className="sc-head-r">
              <Link to="/blogs/all" type="button" className="btn btn-o-primary">
                View all
                <span className="btn-icon">
                  <i className="bi bi-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
          {/* --- binding top 5 posts on list- ---} */}
          <div className="card-list grid-cols grid-cols-2" data-testid="articles">
            {
                allArticles?.slice(0, 2).map((blogItem) => (
                  <Card blogItemData={blogItem} data-testid="article" showContent key={blogItem.id} />
                ))
              }
          </div>
          <div className="card-list grid-cols grid-cols-3">
            {
                allArticles?.slice(2, 5).map((blogItem) => (
                  <Card blogItemData={blogItem} data-testid="article" isCardSm key={blogItem.id} />
                ))
              }
          </div>
        </div>
      </div>
    </section>
  );
}
