// eslint-disable-next-line no-unused-vars
import React from "react";
import "./IconButton.css";

// eslint-disable-next-line react/prop-types
const IconButton = ({ icon, onClick, style }) => {
    return (
        <button className={`icon-button ${style}`} onClick={onClick}>
            {icon && <span className="icon">{icon}</span>}
        </button>
    );
};

export default IconButton;
