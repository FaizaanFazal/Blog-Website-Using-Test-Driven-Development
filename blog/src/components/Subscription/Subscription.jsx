import React from 'react';
import SubscriptionSearch from './SubscriptionSearch';
import images from '../../utils/images';

export default function Subscription() {
  return (
    <>
      <div className="newsletter-curve">
        <img src={`${images.newsletter_wave}`} />
      </div>

      <section className="newsletter-sc bg-blue-dark text-white">
        <div className="container">
          <div className="newsletter-content grid-cols grid-cols-2 items-center">
            <div className="newsletter-l">
              <h3 className="title title-lg">
                Get our stories delivered from us to your inbox weekly.
              </h3>
              <SubscriptionSearch />
            </div>

            <div className="newsletter-r">
              <div className="newsletter-info">
                <div className="newsletter-info-wrapper bg-white">
                  <div className="info-img">
                    <img data-testid="Image" src = { `${images.newsletter}`} className="object-fit-cover" />
                  </div>
                  <div className="info-text">
                    <h4 className="text-xxl text title">
                      The best articles every week
                    </h4>
                    <p className="text text-lg">Our insurnace plans offers are priced the same everywheres else.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
