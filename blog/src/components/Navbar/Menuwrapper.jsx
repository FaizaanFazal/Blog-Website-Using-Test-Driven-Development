import React from 'react'

export default function Menuwrapper() {
  return (
    <div className={`nb-menu-wrapper flex items-center ${isSideMenuOpen ? "show" : ""}`}>
    <button type="button" className="nav-hide-btn" onClick={hideSideMenu}>
      <i className="bi bi-x-square"></i>
    </button>
    <ul className="nav-menu flex items-center">
      <li  className="nav-item">
        <a href="/" className="nav-link">Home</a>
      </li>
      <li className="nav-item">
        <a href="/featured" className="nav-link">
          Featured
          <span className="nav-link-icon">
            <i className="bi bi-chevron-down"></i>
          </span>
        </a>
      </li>
      <li className="nav-item">
        <a href="/about" className="nav-link">About</a>
      </li>
      <li className="nav-item">
        <a href="/contact" className="nav-link">Contact</a>
      </li>
    </ul>
    <div className="nav-btns">
        <a role="listitem" href="/createpost" className="nav-btn btn">Post</a>
    </div>
  </div>
  )
}
