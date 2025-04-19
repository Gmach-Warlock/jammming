import React from "react";
import './Login.css';


let isLoggedIn = false;

function Login() {
    return isLoggedIn ? <h2>Hello</h2> : <button>Login</button>;
};

export default Login;