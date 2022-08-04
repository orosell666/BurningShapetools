import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm">
			<div className="container">
				<div className="row">
					<Link to="/">
						<img className="navbar-brand mb-0 h1" src="https://scontent.fbcn9-1.fna.fbcdn.net/v/t1.6435-9/38041916_1699864110111867_5266485659949858816_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UGmfznHHIjAAX_45Maj&_nc_ht=scontent.fbcn9-1.fna&oh=00_AT9pcYBxFKIcYIZAmZWEKvDl8CVNeFQN328AEljZ3CEBsQ&oe=6311A0CA" width={70} height={70} />
					</Link></div>
				<button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end dropstart" id="navbarNavDarkDropdown">
					<ul className="navbar-nav">
						<li className="nav-item dropdown">
							<a className="btn btn-dark dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Parks, Companies & Jobs
							</a>
							<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
								<Link to="/jobs">
									<li><a className="dropdown-item" href="#">Wanna use the shapetool this winter? Check the chances!</a></li></Link>
								<Link to="/country">
									<li><a className="dropdown-item" href="#">Check the parks in each Country</a></li></Link>
								<Link to="/companies">
									<li><a className="dropdown-item" href="#">Companies that shape</a></li></Link>


							</ul>
						</li>
					</ul>
				</div>






			</div>
		</nav >
	);
};
