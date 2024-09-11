import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";

export const Signup = () => {
    const {actions} = useContext(Context)
    const navigate = useNavigate()
    const handleSubmit = async(event) => {
        event.preventDefault();
        let email = event.target.emailInput.value;
        let password = event.target.passwordInput.value;
        let confirmPasswordInput = event.target.confirmPasswordInput.value;
        if (password !== confirmPasswordInput){
            alert("Password doesn't match.");
            return;
        }
        const response = await actions.signup(email, password);
        if (response) {
            console.log("Sign up Successful")
            alert ("Sign Up Successful.")
            navigate("/login")
        } else [
            console.log("sign up failed")
        ]
    };
    return (
        <div className="container auth-page text-center">
            <h1>Signup</h1>
            <form onSubmit={handleSubmit} className="d-flex flex-column">
                <input className="input-box" type="email" placeholder="email@host.com" name="emailInput" required />
                <input className="input-box" type="password" placeholder="Password" name="passwordInput" required />
                <input className="input-box" type="password" placeholder="Confirm Password" name="confirmPasswordInput" required />
                <button type="submit" className="btn btn-success submit-btn">Sign Up</button>
                <Link to="/login">Already have an account?</Link>
            </form>
        </div>
    )
}