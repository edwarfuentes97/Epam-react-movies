import React, { useState } from 'react';
import './GenreSelect.css'; // Importa el archivo CSS

export function GenreSelect({ genres , current, selectedGenreCallback }) {
  const [selectedGenre, setSelectedGenre] = useState(current);

  const handleGenreClick = (genre) => {
    selectedGenreCallback(genre)
    setSelectedGenre(genre);
  };

  return (
      <div className="gs-genre-general-container">
        <div className={'gs-genre-container'}>
          <ul className="gs-genre-list">
            { genres && genres.map((sGenres) => (
                <li
                    key={sGenres}
                    className={`gs-genre-item ${selectedGenre === sGenres 
                      ? 'gs-genre-item-selected gs-border-red' : 'gs-border-white'}`}
                    onClick={() => handleGenreClick(sGenres)}
                >
                  {sGenres}
                </li>
            )) }
          </ul>
        </div>

        <div className="gs-genre-sortby">
          <span className={'gs-span-sortby'}>SORT BY</span>
          <select name="sortby" id="sortby" className={'gs-select-sorby'}>
            <option key={'release_date'} value="release_date">RELEASE DATE</option>
            <option key={'rating'} value="rating">RATING</option>
            <option key={'last_updated'} value="last_updated">LAST UPDATED</option>
            <option key={'other'} value="other">other</option>
          </select>
        </div>
      </div>

  );
}
