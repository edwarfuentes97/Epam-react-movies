import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetail.css'

export default function MovieDetail({
    movieImageUrl,
    movieName,
    genres,
    releaseDate,
    score,
    duration,
    description }) {

    /*     const handleGenreClick = (movie) => {
            onclickEvent(movie)
        }; */

    return (
        <>
            <div className="md-container">
                <div className="md-container-image">
                    <img src={movieImageUrl} alt={movieName} className="md-image" />
                </div>
                <div className="md-container-info">
                    <div className="md-row md-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                            <circle cx="18.5" cy="10.5" r="9.5" stroke="#F65261" strokeWidth="2" />
                            <path d="M10.5 19.5L1.5 28.5" stroke="#F65261" strokeWidth="2" strokeLinecap="square" />
                        </svg>
                    </div>
                    <div className="md-row">
                        <h1 className="md-movie-name">{movieName}</h1>
                        <span className="md-score">{score}</span>
                    </div>
                    <div className="md-row">
                        {genres &&
                            genres.map(elm => {
                                return (<h3 key={elm.id} className="md-genres">{elm.value}</h3>)
                            })
                        }

                    </div>
                    <div className="md-row">
                        <span className="md-release-date">{releaseDate}</span>
                        <span className="md-duration">{duration}</span>
                    </div>
                    <div className="md-row">
                        <p className="md-description">{description}</p>
                    </div>
                </div>
            </div>
        </>

    );
}

MovieDetail.propTypes = {
    movieImageUrl: PropTypes.string.isRequired,
    movieName: PropTypes.string.isRequired,
    genres: PropTypes.any,
    releaseDate: PropTypes.string.isRequired,
    score: PropTypes.number,
    duration: PropTypes.any,
    description: PropTypes.string.isRequired
}
