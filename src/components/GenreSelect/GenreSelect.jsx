import React, { useState } from 'react';
import './GenreSelect.css'; // Importa el archivo CSS

export function GenreSelect({ genders , current, selectedGenreCallback }) {
  const [selectedGenre, setSelectedGenre] = useState(current);

  const handleGenreClick = (genre) => {
    selectedGenreCallback(genre)
    setSelectedGenre(genre);
  };

  return (
      <>
        <div className="genre-general-container">
          <div className={'genre-container'}>
            <ul className="genre-list">
              {genders.map((gender) => (
                  <>
                    <li
                        key={gender}
                        className={`genre-item ${selectedGenre === gender ? 'genre-item-selected border-red' : 'border-white'}`}
                        onClick={() => handleGenreClick(gender)}
                    >
                      {gender}
                    </li>
                  </>
              ))}
            </ul>
          </div>

          <div className="genre-sortby">
            <span className={'span-sortby'}>SORT BY</span>
            <select name="sortby" id="sortby" className={'select-sorby'}>
              <option key={'release_date'} value="release_date">RELEASE DATE</option>
              <option key={'rating'} value="rating">RATING</option>
              <option key={'last_updated'} value="last_updated">LAST UPDATED</option>
              <option key={'other'} value="other">other</option>
            </select>

          </div>

        </div>
      </>
  );
}
