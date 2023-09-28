import React from 'react';
import PropTypes from 'prop-types';
import './MovieForm.css'

export default function MovieForm({ movie, onSubmit }) {

    const handleClickAddMovie = (movie, action) => {
        onsubmit(movie);
    }

    return (

        <div className="">
            DEMO
        </div>

    );
}

MovieForm.propTypes = {
    movie: PropTypes.any,
    onSubmit: PropTypes.func
}
