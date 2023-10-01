import React from 'react'
import Navitem from './Navitem'

export default function Menuwrapper() {
  return (
    <div>
    <ul className="nav-menu flex items-center">
        <Navitem href="/" text="Home" />
        <Navitem href="/featured" text="Featured">
            <span className="nav-link-icon"><i className="bi bi-chevron-down"></i></span>
        </Navitem>
        <Navitem href="/about" text="About" />
        <Navitem href="/contact" text="Contact" />
        <div className="nav-btns">
            <a role="listitem" href="/createpost" className="nav-btn btn">Post</a>
        </div>
    </ul>
  </div>
  )
}
