import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm">
			<div className="container">
				<div className="row">
					<Link to="/" style={{ "text-decoration": "none" }} >
						<p className="navbar-brand mb-0 logotipNavbar" >B.S.</p>
					</Link></div>
				<button className="navbar-toggler dark " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<img className="navbar-toggler-icon fa-solid fa-square-caret-down" ></img>
				</button>
				<div className="collapse navbar-collapse justify-content-end dropstart dark" id="navbarNavDarkDropdown">
					<ul className="navbar-nav">
						<li className="nav-item dropdown">
							<a className="btn btn-dark dropdown-toggle " href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">

							</a>
							<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
								<Link to="/jobs" style={{ "text-decoration": "none" }}>
									<li><a className="dropdown-item " href="#">Wanna use the shapetool this winter? Check the chances!</a></li></Link>
								<Link to="/country" style={{ "text-decoration": "none" }}>
									<li><a className="dropdown-item" href="#">Check the parks in each Country</a></li></Link>
								<Link to="/companies" style={{ "text-decoration": "none" }}>
									<li><a className="dropdown-item" href="#">Companies that shape</a></li></Link>


							</ul>
						</li>
					</ul>
				</div>






			</div>
		</nav >
	);
};
