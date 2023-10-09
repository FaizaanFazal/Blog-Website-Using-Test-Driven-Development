import React from 'react';

export default function FooterLink({ linkData }) {
  return (
    <div className="ftr-item">
      <h4 className="ftr-item-title text-lg">{ linkData.title }</h4>
      <ul className="ftr-nav-links">
        {
          linkData.links.map((item) => (
            <li className="ftr-nav-item" key={item.id}>
              <a data-testid="otherLinks" href={item.url} className="ftr-nav-link text-base">{ item.name }</a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
