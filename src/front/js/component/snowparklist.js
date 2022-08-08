import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { SnowparkModal } from "./snowparkmodal"
import { Link, useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

export const SnowparkCard = (props) => {
    const { store, actions } = useContext(Context);




    return (
        store.snowparks.map((value, index) => {
            return (


                < div >

                    <div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded" >
                        <img src="https://c.tenor.com/UH_6a9UuIMMAAAAC/cool.gif" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">{value.name}</h5>
                            <p className="card-text">Location: {value.location}</p>
                            <p className="card-text">Number of shapers: {value.shapers}</p>
                            <p className="card-text">Number of catdrivers: {value.bullydrivers}</p>
                            <p className="card-text">Company in charge: {value.companies}</p>
                            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">More Info</button>

                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <SnowparkModal />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div >
            )
        })
    )

}
SnowparkCard.propTypes = {
    snowparks: PropTypes.any
};