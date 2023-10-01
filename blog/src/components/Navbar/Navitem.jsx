import React from 'react'
import  {Link}  from 'react-router-dom';

export default function Navitem(props) {
  return (
    <li className="nav-item">
    <Link role='link' to={props.to} className="nav-link">{props.text}{props.children}</Link>
  </li>
  )
}
