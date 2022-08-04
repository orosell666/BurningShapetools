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
		<div className="container text-center">
			<h1 className="display-4">Shape Opportunities{store.jobs[params.theid]}</h1>
			<div className="container text-center mt-5">

				<div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded mt-5" >
					<img src="https://i.gifer.com/8yLJ.gif" className="card-img-top img-fluid mx-auto " alt="" />
					<div className="card-body text-center">
						<h5 className="card-title text"><strong>Job Title{ }</strong></h5>
						<p className="card-text">Description: { }</p>
						<p className="card-text">Company: { }</p>

					</div>
				</div>
			</div>

		</div>
	);
};

Jobs.propTypes = {
	match: PropTypes.object
};
