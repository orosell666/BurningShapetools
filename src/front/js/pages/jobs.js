import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Jobs = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {

		actions.LoadJobs(store.jobs);

	}, [])

	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {store.jobs[params.theid]}</h1>
			<img src="https://c.tenor.com/UH_6a9UuIMMAAAAC/cool.gif" />

		</div>
	);
};

Jobs.propTypes = {
	match: PropTypes.object
};
