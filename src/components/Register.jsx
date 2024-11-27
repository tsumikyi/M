// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Register.css";

// eslint-disable-next-line react/prop-types
const Register = ({ navigateTo }) => {
    return (
        <div className="register">
            <h1>Register</h1>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={() => navigateTo("login")}>Back to Login</button>
            <button onClick={() => navigateTo("tasks")}>Register</button>
        </div>
    );
};

export default Register;
