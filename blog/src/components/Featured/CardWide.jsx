import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../../utils/images';
import '../../styles/Card.scss';
import { useSelector } from 'react-redux';

const CardWide = ({ blogItemData }) => {
  const [author, setAuthor] = useState();
  const users = useSelector((state) => state.user.allusers);
  const { authorId } = blogItemData;
  const [slicedDate, setSlicedDate] = useState('');

  const MAX_LENGTH = 250;
  let filtered;
  useEffect(()=>{
    
      filtered = users?.filter((user) => user.id === authorId);
      console.log(filtered)
      setAuthor(filtered[0]);
      if (filtered) {
        const dateString = blogItemData?.createdAt;
        setSlicedDate(dateString.substring(0, 10));
      } else {
        setSlicedDate('NA');
      }
  },[])
  return (
    <div className="card-grid grid">
      <div className="card-grid-img">
        <img data-testid="FeaturedImg" src={`${blogItemData?.imageSrc}`} alt={`${blogItemData?.imageAlt}`} className="object-fit-cover" />
      </div>
      <div className="card-grid-text">
        <div>
          <div className="badge badge-primary">featured</div>
          <h2 data-testid="headingfeatured" className="title-lg title featured-title">
            { blogItemData?.title }
          </h2>

          {blogItemData?.content?.length > MAX_LENGTH
            ? (
              <p className="text-lg text" data-testid="featureSummary">
                {`${blogItemData.content.substring(0, MAX_LENGTH)}...`}
                <Link data-testid="slugLink" to={`blogdetails/${blogItemData?.slug}`}>Read more</Link>
              </p>
            )
            : <p data-testid="featureSummary">{blogItemData?.content}</p>}
        </div>

        <div className="card-footer flex justify-between items-center">
          <div className="writer-info grid">
            <div className="info-avatar">
              <img src={`${author?.authorImageSrc}`} alt={`${author?.authorImageAlt}`} className="object-fit-cover" />
            </div>
            <div className="info-intro">
              <p className="intro-name text-base">{ author?.userName }</p>
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
          <div className="date-info text text-base" data-testid="featureDate">{ slicedDate}</div>
        </div>
      </div>
    </div>
  );
};

export default CardWide;
