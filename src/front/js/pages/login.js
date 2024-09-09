import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {

    return (
        <div className="container text-center" style={{width: "25%"}}>
            <h1>Login</h1>
            <form className="d-flex flex-column">
                <input className="input-box" type="email" placeholder="email@host.com" name="emailInput" required />
                <input className="input-box" type="password" placeholder="Password" name="passwordInput" required />
                <button type="submit" className="btn btn-success submit-btn">Login</button>
                <Link to="/signup">Click here to sign up!</Link>
            </form>
        </div>
    )
}
