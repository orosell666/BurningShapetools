import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img className="navbar-brand mb-0 h1" src="https://scontent.fbcn9-1.fna.fbcdn.net/v/t1.6435-9/38041916_1699864110111867_5266485659949858816_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UGmfznHHIjAAX_45Maj&_nc_ht=scontent.fbcn9-1.fna&oh=00_AT9pcYBxFKIcYIZAmZWEKvDl8CVNeFQN328AEljZ3CEBsQ&oe=6311A0CA" width={70} height={70} />


				</Link>
				<div className="ml-auto">
					<Link to="/jobs">
						<button className="btn btn-primary">Wanna use the shapetool this winter?</button>
					</Link>
				</div>
			</div>
		</nav >
	);
};
