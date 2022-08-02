import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { SnowparkCard } from "../component/snowparklist";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Hello Oriol!!</h1>
			<p>
				<img src="https://c.tenor.com/UH_6a9UuIMMAAAAC/cool.gif" />
			</p>
			<div className="container">
				<SnowparkCard />
			</div>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p>
		</div>
	);
};
