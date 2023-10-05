import React from 'react';
import Navitem from './Navitem';

export default function Menuwrapper() {
  return (
    <div>
      <ul className="nav-menu flex items-center">
        <Navitem to="/" text="Home" />
        <Navitem to="/featured" text="Featured">
          <span className="nav-link-icon"><i className="bi bi-chevron-down" /></span>
        </Navitem>
        <Navitem to="/about" text="About" />
        <Navitem to="/contacts" text="Contact" />
        <div className="nav-btns">
          <a data-testid="listitem" href="/createpost" className="nav-btn btn">Post</a>
        </div>
      </ul>
    </div>
  );
}
