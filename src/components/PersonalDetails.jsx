// eslint-disable-next-line no-unused-vars
import React from "react";
import "./PersonalDetails.css";

// eslint-disable-next-line react/prop-types
const PersonalDetails = ({ personalDetails, navigateTo }) => {
    return (
        <div className="personal-details">
            <h1>Personal Details</h1>
            {/* eslint-disable-next-line react/prop-types */}
            <p>Name: {personalDetails.name || "Not Provided"}</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p>Email: {personalDetails.email || "Not Provided"}</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p>Phone: {personalDetails.phone || "Not Provided"}</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p>Occupation: {personalDetails.occupation || "Not Provided"}</p>
            <button onClick={() => navigateTo("personalDetailsEdit")}>Edit Details</button>
            <button onClick={() => navigateTo("tasks")}>Back to Tasks</button>
        </div>
    );
};

export default PersonalDetails;
