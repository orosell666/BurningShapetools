import React, { useEffect, useContext } from "react";

import { Context } from "../store/appContext";

export const Country = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {

		actions.LoadCountryParks();
	}, [])
	//const filtered = snowparks.filter(snowpark => {


	//return snowpark.country === 'Austria';
	//	});


	return (

		<div>
			<div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded" >
				<img src="https://c.tenor.com/UH_6a9UuIMMAAAAC/cool.gif" className="card-img-top img-fluid mx-auto " alt="" />
				<div className="card-body text-center">
					<h5 className="card-title text"><strong>Park{ }</strong></h5>
					<p className="card-text">Location: { }</p>
					<p className="card-text">Number of shapers: { }</p>
					<p className="card-text">Number of catdrivers{ }</p>
					<p className="card-text">Company in charge: { }</p>





				</div></div></div>










	)
}
