// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Settings.css";

// eslint-disable-next-line react/prop-types
const Settings = ({ navigateTo }) => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`settings ${darkMode ? "dark" : ""}`}>
            <h1>Settings</h1>
            <label>
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />
                Dark Mode
            </label>
            <button onClick={() => navigateTo("tasks")}>Back to Tasks</button>
        </div>
    );
};

export default Settings;
