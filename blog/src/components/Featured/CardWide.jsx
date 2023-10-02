import images from "../../utils/images";
import "../../styles/Card.scss";
import PropTypes from "prop-types";


const CardWide = ({ blogItemData }) => {
    const MAX_LENGTH = 250;

  return (
    <div className="card-grid grid">
      <div className="card-grid-img">
        <img data-testid='FeaturedImg' src = {`${blogItemData[0].image}`} alt = "Featured image" className="object-fit-cover" />
      </div>
      <div className="card-grid-text">
        <div>
          <div className="badge badge-primary">featured</div>
          <h2 data-testid='headingfeatured' className="title-lg title featured-title">
            { blogItemData[0].title }
          </h2>
          
            {blogItemData[0].content.length > MAX_LENGTH ?
            (<p className="text-lg text" data-testid='featureSummary'>
                    {`${blogItemData[0].content.substring(0, MAX_LENGTH)}...`}<a href="#">Read more</a>
            </p>) 
            :
            <p data-testid='featureSummary'>{blogItemData[0].content}</p>
            }
        </div>

        <div className="card-footer flex justify-between items-center">
            <div className="writer-info grid">
                <div className="info-avatar">
                <img src = { `${blogItemData[0].authorImage }`} alt="" className="object-fit-cover" />
                </div>
                <div className="info-intro">
                    <p className="intro-name text-base">{ blogItemData[0].author }</p>
                    {blogItemData[0].verified ? 
                      <div className="intro-verify flex items-center">
                          <img src = { `${images.verify_icon_filled}`} className="verify-icon" />
                          <span className="verify-status text-sm text">Verified writer</span>
                      </div>
                      :
                      <div className="intro-verify flex items-center">
                          <img src = { `${images.verify_icon_light}`} className="verify-icon" />
                          <span className="verify-status text-sm text">Not-Verified writer</span>
                      </div>
                    }
                </div>
            </div>
            <div className="date-info text text-base" data-testid='featureDate'>{ blogItemData[0].date}</div>
        </div>
      </div>
    </div>
  )
}

export default CardWide

CardWide.propTypes = {
  blogItemData: PropTypes.object
}