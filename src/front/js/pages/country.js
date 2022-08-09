import React, { useEffect, useContext, useState } from "react";
import { SnowparkModal } from "../component/snowparkmodal"
import { Context } from "../store/appContext";
import PropTypes from 'prop-types';

export const Country = (props) => {
	const { store, actions } = useContext(Context);

	const [parks, setparks] = useState([]);
	useEffect(() => {


		actions.LoadSnowpark(store.snowparks);
		actions.LoadCountryParks();
	}, [])
	//const filtered = snowparks.filter(snowpark => {


	//return snowpark.country === 'Austria';
	//	});
	const GetParks = async (id) => {
		console.log(id)
		const result = await actions.LoadSelectedSnowparkByCountry(id)
		setparks(result)
	}


	return (

		<div className="container">
			<h1 className="container mt-5 text-center">Here you can see the parks filtered by Country</h1>
			<div className="container  mt-5">
				{
					store.countries.map((value, index) => {
						return (
							<div className="d-inline-flex justify-content-center">
								<div className="btn-toolbar d-inline-flex-" role="toolbar" aria-label="Toolbar" onClick={() => {
									GetParks(value.id)
								}}>
									<div className="btn-group me-2" role="group" aria-label="First group">
										<button type="button" className="btn btn-outline-dark">{value.name}     <img src={value.country_flag} width={40} height={30} alt="" /></button>
									</div>
								</div>
							</div>
						)
					})
				}
				{
					parks.map((value, index) => {
						return (
							<div className="row g-4 d-flex flex-row flex-nowrap overflow-auto">
								<div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded mt-5" key={index}>
									<div className="card-body text-center" >
										<img src="https://i.gifer.com/YJ4u.gif" className="card-img-top img-fluid mx-auto " alt="" />
										<h5 className="card-title" id={`id${value.id}`}><strong>{value.name}</strong></h5>
										<p className="card-text" id={`id${value.id}`}>Location: {value.location}</p>
										<p className="card-text" id={`id${value.id}`}>Number of shapers: { }</p>
										<p className="card-text" id={`id${value.id}`}>Number of catdrivers{ }</p>
										<p className="card-text" id={`id${value.id}`}>Company in charge: { }</p>
									</div>
									<button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">More Info</button>

									<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
										<div className="modal-dialog modal-lg">
											<div className="modal-content">
												{store.snowparks.map((snowpark) => {
													return (<SnowparkModal key={snowpark.id} snowpark={snowpark} />)
												})}
											</div>
										</div>
									</div>
								</div></div>

						)
					})
				}

			</div>


		</div>








	)



}

