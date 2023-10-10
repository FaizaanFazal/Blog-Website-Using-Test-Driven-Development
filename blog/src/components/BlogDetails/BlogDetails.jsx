import React from 'react';
import { useSelector } from 'react-redux';
import images from '../../utils/images';
import '../../styles/Card.scss';


export default function BlogDetails() {
    const allblogs = useSelector((state) => state.blog.blogs);


  return (
    <section data-testid="blogdetails">
        <div className='container'>
            <h4 className="title title-lg">All Articles</h4>
            <div className='card-footer flex flex justify-between items-center'>
                    <div className="writer-info grid">
                    <div className="info-avatar">
                    <img src={images.author1} alt="koi na" className="object-fit-cover" />
                    </div>
                    <div className="info-intro">
                    <p className="intro-name text-base">Faizaan</p>
                    {/* {blogItemData.verified
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
                        )} */}
                    </div>
                    </div>

                    <div className="date-info text text-base" data-testid="detailsdate">12 Aug, 2023</div>
            </div>

            <div className='cover-grid grid mt-1 mb-2 '>
                <div className='cover-grid-img'>
                    <img data-testid="detailsImage" src={images.blogImg1} alt="koi na" className="object-fit-cover" />
                </div>
            </div>

        <div>
            
        <p className='text-lg text-black mt-3 px-1 discriptiontext'>
            Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.<br/><br/>
            Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.<br/><br/>
            Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.Traveling on a budget doesn't have to compromise your experience. Here are 10 tips to make the most of your journey without breaking the bank.<br/>
            </p>
        </div>
        </div>
      
    </section>
  );
}
