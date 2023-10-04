import images from "../../utils/images";
import "../../styles/Card.scss";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


const CardWide = ( {blogItemData} ) => {
    const MAX_LENGTH = 250;
   
  return (
    <div className="card-grid grid">
      <div className="card-grid-img">
        <img data-testid='FeaturedImg' src = {`${blogItemData.image}`} alt = "Featured" className="object-fit-cover" />
      </div>
      <div className="card-grid-text">
        <div>
          <div className="badge badge-primary">featured</div>
          <h2 data-testid='headingfeatured' className="title-lg title featured-title">
            { blogItemData.title }
          </h2>
          
            {blogItemData.content?.length > MAX_LENGTH ?
            <p className="text-lg text" data-testid='featureSummary'>
                    {`${blogItemData.content.substring(0, MAX_LENGTH)}...`}<Link data-testid='slugLink' to={`/blogs/${blogItemData.slug}`}>Read more</Link>
            </p>
            :
            <p data-testid='featureSummary'>{blogItemData.content}</p>
            }
        </div>

        <div className="card-footer flex justify-between items-center">
            <div className="writer-info grid">
                <div className="info-avatar">
                <img src = { `${blogItemData.authorImage }`} alt="" className="object-fit-cover" />
                </div>
                <div className="info-intro">
                    <p className="intro-name text-base">{ blogItemData.author }</p>
                    {blogItemData.verified ? 
                      <div className="intro-verify flex items-center">
                          <img src = { `${images.verify_icon_filled}`} alt="icon" className="verify-icon" />
                          <span className="verify-status text-sm text">Verified writer</span>
                      </div>
                      :
                      <div className="intro-verify flex items-center">
                          <img src = { `${images.verify_icon_light}`} alt="icon" className="verify-icon" />
                          <span className="verify-status text-sm text">Not-Verified writer</span>
                      </div>
                    }
                </div>
            </div>
            <div className="date-info text text-base" data-testid='featureDate'>{ blogItemData.date}</div>
        </div>
      </div>
    </div>
  )
}

export default CardWide

CardWide.propTypes = {
  blogItemData: PropTypes.object
}