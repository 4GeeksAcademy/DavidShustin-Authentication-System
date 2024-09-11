import { Link } from "react-router-dom";
import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext"

export const Login = () => {
    const {actions} = useContext(Context)
    const navigate = useNavigate()
    const handleSubmit = async(event) => {
        event.preventDefault();
        let email = event.target.emailInput.value;
        let password = event.target.passwordInput.value;
        const response = await actions.login(email, password);
        if (response){
            console.log("Login successful.")
            navigate("/private")
        } else {
            console.log("login failed")
            navigate("/private")
        }
    }
    return (
        <div className="container text-center" style={{width: "25%"}}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="d-flex flex-column">
                <input className="input-box" type="email" placeholder="email@host.com" name="emailInput" required />
                <input className="input-box" type="password" placeholder="Password" name="passwordInput" required />
                <button type="submit" className="btn btn-success submit-btn">Login</button>
                <Link to="/signup">Click here to sign up!</Link>
            </form>
        </div>
    )
}
