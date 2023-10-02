import React from 'react';
import PropTypes from 'prop-types';
import './Dialog.css'

export default function Dialog({ children, modalTitle, onClickClose }) {

    const handleClickAddMovie = (movie, action) => {
        onClickClose(movie, action);
    }

    return (
        <div className="modal-background">
            <div className="modal-content">
                <span className="close-btn"
                    onClick={() => handleClickAddMovie(null, false)}>&times;</span>
                {/* <h2>{modalTitle}</h2> */}
                {children}
            </div>
        </div>
    );
}

Dialog.propTypes = {
    children: PropTypes.any,
    modalTitle: PropTypes.any,
    onClickClose: PropTypes.any
}
