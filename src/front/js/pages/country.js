import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Country = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {

		actions.LoadSnowpark();
	}, [])

	return (

		store.countries.map((value, index) => {

			const imageSize = {
				width: "300px",
				height: "180 px",
			}

			return (

				<div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded" key={index}>
					<img src="https://c.tenor.com/UH_6a9UuIMMAAAAC/cool.gif" className="card-img-top img-fluid mx-auto " style={imageSize} alt="Moto" />
					<div className="card-body text-center">
						<h5 className="card-title text"><strong>Park{ }</strong></h5>
						<p className="card-text">Location: { }</p>
						<p className="card-text">Number of shapers: { }</p>
						<p className="card-text">Number of catdrivers{ }</p>
						<p className="card-text">Company in charge: { }</p>





					</div></div>





			)
		})

	);
};
