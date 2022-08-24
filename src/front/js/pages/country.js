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

	const GetParks = async (id) => {
		console.log(id)
		const result = await actions.LoadSelectedSnowparkByCountry(id)
		setparks(result)
	}


	return (

		<div className="container">
			<h1 className="container mt-5 text-center">Take a look in your Country</h1>
			<div className="container-fluid mx-auto">
				{
					store.countries.map((value, index) => {

						return (
							<div className="d-inline-flex mx-auto">
								<div className="btn-toolbar d-inline-flex" role="toolbar" aria-label="Toolbar" onClick={() => {
									GetParks(value.id)
								}}>
									<div className="btn-group me-2" role="group" aria-label="First group">
										<button type="button" className="btn ">{value.name}     <img src={value.country_flag} width={35} height={28} alt="" /></button>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
			<div className="container">
				<div className="card-group mt-5 ">
					<div className="row g-4 d-flex flex-row flex-nowrap overflow-auto">
						{
							parks.map((value, index) => {
								const footerposition = {
									pb: "20px"
								}

								return (

									<div className="card col-md-4 mb-3 me-3 shadow  mb-5 bg-body rounded" key={index}>
										<div className="card-body text-center" >
											<img id={`id${value.id}`} src={value.image_url} className="card-img-top img-fluid  " alt="" />
											<h5 className="card-title" id={`id${value.id}`}><strong>{value.name}</strong></h5>
											<p className="card-text" id={`id${value.id}`}>{value.resort}</p>
											<p className="card-text" id={`id${value.id}`}>Shapers: {value.shapers}</p>
											<p className="card-text" id={`id${value.id}`}>Catdrivers: {value.bullydrivers}</p>
											<p className="card-text" id={`id${value.id}`}>Company in charge: {value.companies}</p>

											<div className="card-footer bg-transparent">
												<button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target={`#exampleModal_${value.id}`}>More Info</button>
												<SnowparkModal id={value.id} name={value.name} resort={value.resort} location={value.location} country={value.country} shapers={value.shapers} bullydrivers={value.bullydrivers} web={value.web} machines={value.machines} comment={value.comment} />
											</div>

										</div>
									</div>




								)
							})
						}
					</div>
				</div >
			</div >





		</div>


	)



}

