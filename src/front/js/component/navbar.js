import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();

	const handleLogout = ( ) => {
		sessionStorage.removeItem("token");
		console.log("token removed from sesson strorage")
		navigate("/")
	}

	const isLoggedIn = !!sessionStorage.getItem("token");
	 
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{!isLoggedIn && (	
						<Link to="/login">
						<button className="btn btn-primary">Log In</button>
					</Link>
					)}
					{isLoggedIn && (
						<button onClick={handleLogout} className="btn btn-primary"> logout  </button>
					)}
				</div>
			</div>
		</nav>
	);
};
