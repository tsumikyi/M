// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Filter.css";

// eslint-disable-next-line react/prop-types
const Filter = ({navigateTo }) => {
    return (
        <div className="filter">
            <h1>Filter Tasks</h1>
            <div>
                <button onClick={() => alert("High Priority Tasks")}>High Priority</button>
                <button onClick={() => alert("Medium Priority Tasks")}>Medium Priority</button>
                <button onClick={() => alert("Low Priority Tasks")}>Low Priority</button>
                <button onClick={() => alert("Overdue Tasks")}>Overdue</button>
                <button onClick={() => alert("All Tasks")}>Show All</button>
            </div>
            <div>
                <button onClick={() => navigateTo("personalDetails")}>View Personal Details</button>
            </div>
        </div>
    );
};

export default Filter;
