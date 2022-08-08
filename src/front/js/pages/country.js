import React, { useEffect, useContext } from "react";
import { SnowparkModal } from "../component/snowparkmodal"
import { Context } from "../store/appContext";
import PropTypes from 'prop-types';

export const Country = (props) => {
	const { store, actions } = useContext(Context);

	useEffect(() => {


		actions.LoadSnowpark(store.snowparks);
	}, [])
	//const filtered = snowparks.filter(snowpark => {


	//return snowpark.country === 'Austria';
	//	});


	return (
		<div>
			<div className="container">
				<h1 className="container mt-5 text-center">Here you can see the parks filtered by Country</h1>
				<div className="container text-center mt-5">
					<h2 >Austria</h2><img src="https://cdn-icons-png.flaticon.com/512/555/555490.png" width={60} height={50} className=" justify-content-center" alt="" /></div>
				<div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded mt-5">
					<div className="card-body text-center" >
						<img src="https://i.gifer.com/YJ4u.gif" className="card-img-top img-fluid mx-auto " alt="" />
						<div className="card-body text-center">
							<h5 className="card-title text"><strong>Park{ }</strong></h5>
							<p className="card-text">Location: { }</p>
							<p className="card-text">Number of shapers: { }</p>
							<p className="card-text">Number of catdrivers{ }</p>
							<p className="card-text">Company in charge: { }</p>
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
					</div>
				</div>
				<div className="container">
					<div className="container text-center mt-5">
						<h2 >Switzerland</h2><img src=" https://cdn-icons-png.flaticon.com/512/555/555582.png" width={60} height={50} className=" justify-content-center" alt="" /></div>
					<div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded mt-5" >
						<img src="https://i.gifer.com/1Ke9.gif" className="card-img-top img-fluid mx-auto " alt="" />
						<div className="card-body text-center">
							<h5 className="card-title text"><strong>Park{ }</strong></h5>
							<p className="card-text">Location: { }</p>
							<p className="card-text">Number of shapers: { }</p>
							<p className="card-text">Number of catdrivers{ }</p>
							<p className="card-text">Company in charge: { }</p>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="container text-center mt-5">
						<h2 >Italy</h2><img src="  https://cdn-icons.flaticon.com/png/512/3373/3373278.png" width={60} height={50} className=" justify-content-center" alt="" /></div>
					<div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded mt-5" >
						<img src="https://c.tenor.com/UH_6a9UuIMMAAAAC/cool.gif" className="card-img-top img-fluid mx-auto " alt="" />
						<div className="card-body text-center">
							<h5 className="card-title text"><strong>Park{ }</strong></h5>
							<p className="card-text">Location: { }</p>
							<p className="card-text">Number of shapers: { }</p>
							<p className="card-text">Number of catdrivers{ }</p>
							<p className="card-text">Company in charge: { }</p>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="container text-center mt-5">
						<h2 >France</h2><img src="https://cdn-icons-png.flaticon.com/512/206/206657.png" width={60} height={50} className=" justify-content-center" alt="" /></div>
					<div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded mt-5" >
						<img src="https://c.tenor.com/UH_6a9UuIMMAAAAC/cool.gif" className="card-img-top img-fluid mx-auto " alt="" />
						<div className="card-body text-center">
							<h5 className="card-title text"><strong>Park{ }</strong></h5>
							<p className="card-text">Location: { }</p>
							<p className="card-text">Number of shapers: { }</p>
							<p className="card-text">Number of catdrivers{ }</p>
							<p className="card-text">Company in charge: { }</p>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="container text-center mt-5">
						<h2 >Spain</h2><img src=" https://cdn-icons-png.flaticon.com/512/555/555635.png" width={60} height={50} className=" justify-content-center" alt="" /></div>
					<div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded mt-5" >
						<img src="https://c.tenor.com/UH_6a9UuIMMAAAAC/cool.gif" className="card-img-top img-fluid mx-auto " alt="" />
						<div className="card-body text-center">
							<h5 className="card-title text"><strong>Park{ }</strong></h5>
							<p className="card-text">Location: { }</p>
							<p className="card-text">Number of shapers: { }</p>
							<p className="card-text">Number of catdrivers{ }</p>
							<p className="card-text">Company in charge: { }</p>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="container text-center mt-5">
						<h2 >Andorra</h2><img src=" https://cdn-icons-png.flaticon.com/512/206/206807.png" width={60} height={50} className=" justify-content-center" alt="" /></div>
					<div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded mt-5" >
						<img src="https://c.tenor.com/UH_6a9UuIMMAAAAC/cool.gif" className="card-img-top img-fluid mx-auto " alt="" />
						<div className="card-body text-center">
							<h5 className="card-title text"><strong>Park{ }</strong></h5>
							<p className="card-text">Location: { }</p>
							<p className="card-text">Number of shapers: { }</p>
							<p className="card-text">Number of catdrivers{ }</p>
							<p className="card-text">Company in charge: { }</p>
						</div>
					</div>
				</div>


			</div>







		</div>

	)
}
Country.propTypes = {
	snowpark: PropTypes.any
};
