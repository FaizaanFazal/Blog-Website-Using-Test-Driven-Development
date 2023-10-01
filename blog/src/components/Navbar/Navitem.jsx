import React from 'react'

export default function Navitem(props) {
  return (
    <li className="nav-item">
    <a href={props.href} className="nav-link">{props.text}{props.children}</a>
  </li>
  )
}
