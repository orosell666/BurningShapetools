import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark  navbar-expand-sm">
			<div className="container-fluid ">

				<Link to="/" style={{ "text-decoration": "none" }} >
					<a className="navbar-brand mb-0 logotipNavbar" >B.S.</a>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" ></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav mx-auto">

						<Link to="/jobs" style={{ "text-decoration": "none" }}>
							<a className="nav-link textNavbar me-4 " href="#">Jobs!</a></Link>
						<Link to="/country" style={{ "text-decoration": "none" }}>
							<a className="nav-link textNavbar me-4" href="#">Country</a></Link>
						<Link to="/companies" style={{ "text-decoration": "none" }}>
							<a className="nav-link textNavbar me-4" href="#">Companies that shape</a></Link>

					</div>
				</div>
			</div>
		</nav >
	);
};
