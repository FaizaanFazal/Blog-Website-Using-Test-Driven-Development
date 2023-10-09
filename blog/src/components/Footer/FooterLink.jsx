import React from 'react';

const FooterLink = ({ linksData }) => (
  <div className="ftr-item">
    <h4 className="ftr-item-title text-lg">{ linksData.title }</h4>
    <ul className="ftr-nav-links">
      {
        linksData.links.map((link, index) => (
          <li className="ftr-nav-item" key={`link${index}`}>
            <a data-testid="otherLinks" href="/" className="ftr-nav-link text-base">{ link }</a>
          </li>
        ))
        }
    </ul>
  </div>
);

export default FooterLink;
