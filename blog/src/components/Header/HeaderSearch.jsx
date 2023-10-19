import React, { useState } from 'react';

export default function HeaderSearch() {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="hd-search">
      <form>
        <div className="form-group flex items-stretch bg-white">
          <span className="form-gp-icon items-center justify-center">
            <i className="bi bi-search" />
          </span>
          <input
            type="text"
            value={inputValue}
            className="form-gp-input"
            placeholder="Search article"
            onChange={handleInput}
            data-testid="inputSearch"
          />
          <button type="button" disabled={!inputValue} className="form-gp-btn text-white bg-primary btn">Search</button>
        </div>
      </form>
    </div>
  );
}
