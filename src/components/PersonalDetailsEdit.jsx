// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./PersonalDetailsEdit.css";

// eslint-disable-next-line react/prop-types
const PersonalDetailsEdit = ({ personalDetails, setPersonalDetails, navigateTo }) => {
    const [details, setDetails] = useState(personalDetails);

    const handleSave = () => {
        setPersonalDetails(details);
        navigateTo("personalDetails");
    };

    return (
        <div className="personal-details-edit">
            <h1>Edit Personal Details</h1>
            <input
                type="text"
                placeholder="Name"
                value={details.name}
                onChange={(e) => setDetails({ ...details, name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={details.email}
                onChange={(e) => setDetails({ ...details, email: e.target.value })}
            />
            <input
                type="text"
                placeholder="Phone"
                value={details.phone}
                onChange={(e) => setDetails({ ...details, phone: e.target.value })}
            />
            <input
                type="text"
                placeholder="Occupation"
                value={details.occupation}
                onChange={(e) => setDetails({ ...details, occupation: e.target.value })}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => navigateTo("tasks")}>Back to Tasks</button>
        </div>
    );
};

export default PersonalDetailsEdit;
