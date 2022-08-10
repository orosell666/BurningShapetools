import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const Jobs = () => {
	const { store, actions } = useContext(Context);


	useEffect(() => {
		actions.LoadJobs();
	}, [])

	return (



		<div className="container ">
			<h1 className="container mt-5 text-center">Shape Opportunities</h1>
			<div className="container  mt-5">
				<div className="card-group mt-5 ">
					<div className="row g-4 d-flex flex-row flex-nowrap overflow-auto">
						{
							store.jobs.map((value, index) => {
								return (



									<div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded">

										<img src="https://i.gifer.com/8yLJ.gif" className="card-img-top img-fluid mx-auto " alt="" />

										<h5 className="card-title text"><strong>{value.jobtitle}</strong></h5>
										<p className="card-text">Description: {value.description}</p>
										<p className="card-text">Where: { }</p>


									</div>


								)
							}
							)
						}</div></div></div></div>
	)
}


