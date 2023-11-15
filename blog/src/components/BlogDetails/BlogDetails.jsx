import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import images from '../../utils/images';
import '../../styles/Card.scss';

export default function BlogDetails() {
  const [author, setAuthor] = useState();
  const [blogdetail, setBlogdetail] = useState({});
  const [slicedDate, setSlicedDate] = useState('');
  const [liked, setLiked] = useState(false);

  const location = useLocation();
  const blogs = useSelector((state) => state.blog.blogs);
  const users = useSelector((state) => state.user.allusers);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const slug = location.pathname.split('/')[location.pathname.split('/').length - 1];
    const blog = blogs.filter((blog) => blog.slug === slug)[0];
    if (blog) {
      const dateString = blog?.createdAt;
      setSlicedDate(dateString.substring(0, 10));
    } else {
      setSlicedDate('NA');
    }

    setBlogdetail(blog);
    if (blog) {
      const { authorId } = blog;
      const filtered = users.filter((user) => user.id === authorId);
      setAuthor(filtered[0]);
      if(blog.likes.userId===user.id){
        setLiked(true);
      }
    }

  }, [location, blogs]);

  return (
    <section data-testid="details" className="mb-5">
      <div className="container">
      <div className='likebtncont'>
        <h4 data-testid="titleHeading" className="title title-lg">{blogdetail?.title}</h4>
      { liked? <button className='iconlike'>
       <img  src={`${images.heart_filled}`} alt='likebutton' /> 
       </button>
       :
       <button className='iconlike'>
       <img  src={`${images.heart}`} alt='likebutton' /> 
       </button>}
      </div>
        
        <div className="card-footer  flex justify-between items-center">
          <div className="writer-info grid">
            <div className="info-avatar">
              <img src={author?.authorImageSrc} alt={author?.authorImageAlt} className="object-fit-cover" />
            </div>
            <div className="info-intro">
              <p className="intro-name text-base">{author?.userName}</p>
              {author?.verified
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
          
          <div className="date-info text text-base" data-testid="detailsdate">{slicedDate}</div>
        </div>

        <div className="cover-grid grid mt-3 mb-2 ">
          <div className="cover-grid-img">
            <img data-testid="Image" src={blogdetail?.imageSrc} alt={blogdetail?.imageAlt} className="object-fit-cover" />
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
