import '../../styles/Card.scss';
import { Link } from 'react-router-dom';
import images from '../../utils/images';

export default function Card({ blogItemData, showContent, isCardSm }) {
  // todo get id of author from blog and fetch his image url and name from users

  return (
    <Link to={`/blogdetails/${blogItemData?.slug}`} data-testid="slugLink">
      <div data-testid="artice" className={`card ${isCardSm ? 'card-sm' : ''}`}>
        <img data-testid="Image" src={`${blogItemData?.imageSrc}`} alt={`${blogItemData?.imageAlt}`} className="card-overlay-img object-fit-cover" />
        <div className="card-content">
          <div className="card-body">
            <h3 className="title title-base">
              {blogItemData?.title}
            </h3>
            {
              showContent && <p className="text text-lg">{blogItemData?.content }</p>
            }
          </div>
          <div className="card-footer card-footer-light flex justify-between items-center">
            <div className="writer-info grid">
              <div className="info-avatar">
                <img src={`${blogItemData?.authorImageSrc}`} alt={`${blogItemData?.authorImageAlt}`} className="object-fit-cover" />
              </div>
              <div className="info-intro">
                <p className="intro-name text-base">{ blogItemData?.author }</p>
                <div className="intro-verify flex items-center">
                  <img src={`${images.verify_icon_filled}`} alt="icon" className="verify-icon" />
                  <span className="verify-status text-sm text">Verified writer</span>
                </div>
              </div>
            </div>
            <div className="date-info text text-base">{ blogItemData?.date}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
