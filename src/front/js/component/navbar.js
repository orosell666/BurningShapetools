import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Burning Shapetools</span>
				</Link>
				<div className="ml-auto">
					<Link to="/jobs">
						<button className="btn btn-primary">Wanna use the shapetool this winter?</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
