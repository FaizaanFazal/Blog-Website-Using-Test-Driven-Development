import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import images from '../../utils/images';
import '../../styles/Card.scss';

export default function BlogDetails() {
  const location = useLocation();
  // const id = new URLSearchParams(location.search).get('slug');
  // const params = useParams();
  // const { slug } = params;
  const blogs = useSelector((state) => state.blog.blogs);

  const [blogdetail, setBlogdetail] = useState({});
  useEffect(() => {
    const slug = location.pathname.split('/')[location.pathname.split('/').length - 1];
    const blog = blogs.filter((blog) => blog.slug === slug)[0];
    setBlogdetail(blog);
  }, [location, blogs]);

  return (
    <section data-testid="details" className="mb-5">
      <div className="container">
        <h4 data-testid="titleHeading" className="title title-lg">{blogdetail?.title}</h4>
        <div className="card-footer  flex justify-between items-center">
          <div className="writer-info grid">
            <div className="info-avatar">
              <img src={blogdetail?.authorImage?.src} alt={blogdetail?.authorImage?.alt} className="object-fit-cover" />
            </div>
            <div className="info-intro">
              <p className="intro-name text-base">{blogdetail?.author}</p>
              {blogdetail?.verified
                ? (
                  <div className="intro-verify flex items-center">
                    <img src={`${images.verify_icon_filled}`} alt="icon" className="verify-icon" />
                    <span className="verify-status text-sm text">Verified writer</span>
                  </div>
                )
                : (
                  <div className="intro-verify flex items-center">
                    <img src={`${images.verify_icon_light}`} alt="icon" className="verify-icon" />
                    <span className="verify-status text-sm text">Not-Verified writer</span>
                  </div>
                )}
            </div>
          </div>

          <div className="date-info text text-base" data-testid="detailsdate">{blogdetail?.date}</div>
        </div>

        <div className="cover-grid grid mt-3 mb-2 ">
          <div className="cover-grid-img">
            <img data-testid="Image" src={blogdetail?.image?.src} alt={blogdetail?.image?.alt} className="object-fit-cover" />
          </div>
        </div>

        <div>

          <p data-testid="discription" className="text-lg text-black mt-3 px-1 discriptiontext mb-5 new-line">
            {blogdetail?.content}
          </p>
        </div>
      </div>
      <br />
    </section>
  );
}
