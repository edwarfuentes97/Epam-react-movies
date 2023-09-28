
import * as React from 'react';
import './searchForm.css'
import { useState } from "react";


export const SearchForm = ({ initialValue, onSearch, onAddMovie }) => {


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

  const handleClickAddMovie = (movie, action) => {
    onAddMovie(movie, action)
  }

  return (
    <div className="sf-container">
      <div className="sf-search-container">
        <input className="sf-search-input" type="text" placeholder="Search..." value={inputValue}
          onChange={handleInputChange} onKeyPress={handleKeyPress} />
        <button className="sf-search-button" onClick={handleSearch}>SEARCH</button>
      </div>
      <button className="sf-add-button" onClick={() => handleClickAddMovie(null, false)}>+ ADD MOVIE</button>
    </div>
  );
};
