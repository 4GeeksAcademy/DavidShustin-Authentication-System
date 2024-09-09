import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {

    return (
        <div className="container auth-page text-center">
            <h1>Signup</h1>
            <form className="d-flex flex-column">
                <input className="input-box" type="email" placeholder="email@host.com" name="emailInput" required />
                <input className="input-box" type="password" placeholder="Password" name="passwordInput" required />
                <input className="input-box" type="confirm-password" placeholder="Confirm Password" name="confirmPasswordInput" required />
                <button type="submit" className="btn btn-success submit-btn">Login</button>
                <Link to="/login">Already have an account?</Link>
            </form>
        </div>
    )
}