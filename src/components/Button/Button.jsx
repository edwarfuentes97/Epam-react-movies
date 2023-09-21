/* All related whit the Button component its needed for references, 
dont delete! */

import React from 'react';
import PropTypes from "prop-types";

import "./Button.css";

const getStyles = (...args) => ["button", ...args].filter(Boolean).join(" ");


export function Button({ children , type }) {
    return (
        <button className={getStyles(type)}>{children}</button>
    );
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["primary", "secondary" , "tertiary"])
}

export default Button