import React from 'react';
import PropTypes from 'prop-types';
import './MovieTile.css'

export default function MovieTile({ movieImageUrl, movieName, releaseDate, genres, onclickEvent }) {

    const handleGenreClick = (movie) => {
        onclickEvent(movie)
    };

    return (

        <div className="mt-card" onClick={handleGenreClick}>
            <img src={movieImageUrl} alt={movieName} className="mt-image" />
            <div className="mt-name">{movieName}</div>
            <div className="mt-release-data">{releaseDate}</div>
            <div className="mt-gender"> {genres && (
                genres.map((genreItem, index) => {
                    return (<span key={index+genreItem}>  {genreItem} - </span>)
                })
            )}
            </div>

        </div>

    );
}

MovieTile.propTypes = {
    movieImageUrl: PropTypes.string.isRequired,
    movieName: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    genres: PropTypes.any,
    onClickEvent: PropTypes.any
}
