import React from 'react'
import {Link} from 'react-router-dom'

export default function Navitem(props) {
  return (
    <li className="nav-item">
    <Link to={props.href} className="nav-link">{props.text}{props.children}</Link>
  </li>
  )
}
