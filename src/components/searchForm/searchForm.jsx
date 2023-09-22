
import * as React from 'react';
import './searchForm.css'
import { useState } from "react";


const handleClickAddMovie = () => {
  console.log('click')
}


export const SearchForm = ({ initialValue, onSearch }) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(inputValue)
    }
  };

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <div className="sf-container">
      <div className="sf-search-container">
        <input className="sf-search-input" type="text" placeholder="Search..." value={inputValue}
          onChange={handleInputChange} onKeyPress={handleKeyPress} />
        <button className="sf-search-button" onClick={handleSearch}>SEARCH</button>
      </div>
      <button className="sf-add-button" onClick={() => handleClickAddMovie()}>+ ADD MOVIE</button>
    </div>
  );
};
