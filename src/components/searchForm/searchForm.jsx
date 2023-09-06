
import * as React from 'react';
import './seaarchForm.css'
import {useState} from "react";


const handleClickAddMovie = () => {
  console.log('click')
}


export const SearchForm = ({initialValue, onSearch}) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
      <div className="container">
        <div className="search-container">
          <input className="search-input" type="text" placeholder="Buscar..." value={inputValue}
                 onChange={handleInputChange}/>
          <button className="search-button" onClick={handleSearch}>SEARCH</button>
        </div>
        <button className="add-button" onClick={()=>handleClickAddMovie()}>+ ADD MOVIE</button>
      </div>
  );
};
