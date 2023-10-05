import React from 'react';
import { Link } from 'react-router-dom';

export default function Navitem(props) {
  const { to, text, children } = props;
  return (
    <li data-testid="listitem" className="nav-item">
      <Link role="link" to={to} className="nav-link">
        {text}
        {children}
      </Link>
    </li>
  );
}
