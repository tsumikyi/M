// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Login.css";

// eslint-disable-next-line react/prop-types
const Login = ({ navigateTo }) => {
    return (
        <div className="login">
            <h1>Task Manager</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={() => navigateTo("tasks")}>Sign In</button>
            <button onClick={() => navigateTo("register")}>Register</button>
        </div>
    );
};

export default Login;
