import React from 'react';
import PropTypes from 'prop-types';
import './MovieForm.css';

export default function MovieForm({ movie, onSubmit, title }) {

    const handleClickAddMovie = (movie, action) => {
        onSubmit(movie);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        movie = {
            ...movie,
            [name]: value,
        };
    };

    return (
        <>
            <div className="mf-container">
                <div className="mf-row">
                    <h2 className="mf-title-form">{movie ? 'EDIT MOVIE' : 'ADD MOVIE'}</h2>
                </div>

                <div className="mf-row">
                    <div className="mf-col">
                        <span className="mf-span-cst">TITLE</span>
                        <input
                            className="mf-input-cst"
                            type="text"
                            name="movieName"
                            value={movie && movie.movieName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mf-col">
                        <span className="mf-span-cst">RELEASE DATE</span>
                        <input
                            className="mf-input-cst"
                            type="date"
                            name="releaseDate"
                            value={movie && movie.releaseDate}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="mf-row">
                    <div className="mf-col">
                        <span className="mf-span-cst">MOVIE URL</span>
                        <input
                            className="mf-input-cst"
                            type="text"
                            name="movieImageUrl"
                            value={movie && movie.movieImageUrl}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mf-col">
                        <span className="mf-span-cst">RATING</span>
                        <input
                            className="mf-input-cst"
                            type="number"
                            name="rate"
                            value={movie && movie.rate}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="mf-row">
                    <div className="mf-col">
                        <span className="mf-span-cst">GENRE</span>
                        <select name="genre" id="genreSelect">
                            {movie && movie.genres &&
                                movie.genres.map((genre) => {
                                    return (
                                        <option key={genre.id} value={genre.value}>
                                            {genre.value}
                                        </option>
                                    );
                                })}
                        </select>
                    </div>
                    <div className="mf-col">
                        <span className="mf-span-cst">RUNTIME</span>
                        <input
                            className="mf-input-cst"
                            type="text"
                            name="runtime"
                            value={movie && movie.runtime}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="mf-row mf-col-12">
                    <span className="mf-span-cst">OVERVIEW</span>
                    <textarea
                        name="overview"
                        id="overview"
                        className="mf-textarea-cst "
                        value={movie && movie.description}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
            </div>
        </>
    );
}

MovieForm.propTypes = {
    movie: PropTypes.any,
    onSubmit: PropTypes.func,
};