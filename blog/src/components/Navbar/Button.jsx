import React from 'react';

export default function Button(props) {
  const { className, onClick, children } = props;
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}
