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
			<h1 className="display-4">Shape Opportunities{store.jobs[params.theid]}</h1>
			<img src="https://i.gifer.com/NHqO.gif" className="card-img-top" />

		</div>
	);
};

Jobs.propTypes = {
	match: PropTypes.object
};
