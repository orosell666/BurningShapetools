import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { SnowparkModal } from "./snowparkmodal"
import { Link, useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

export const SnowparkCard = (props) => {
    const { store, actions } = useContext(Context);

    return (
        store.snowparks.map((value, index) => {

            const footerposition = {
                pb: "20px"
            }
            return (

                <div className="card col-md-3 mb-3 me-3 shadow  mb-5 bg-body rounded" >
                    <h5 className="card-title">{value.name}</h5>
                    <img src={value.image_url} className="card-img-top" alt="..." />
                    <div className="card-body ">

                        <p className="card-text">{value.resort}</p>
                        <p className="card-text">Shapers: {value.shapers}</p>
                        <p className="card-text">Catdrivers: {value.bullydrivers}</p>

                        <div className="card-footer bg-transparent position-absolute pb-1 " >
                            <div className="ms-3 me-3">
                                <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target={`#exampleModal_${value.id}`}>More Info</button>
                                <SnowparkModal id={value.id} name={value.name} resort={value.resort} location={value.location} country={value.country} shapers={value.shapers} bullydrivers={value.bullydrivers} web={value.web} machines={value.machines} comment={value.comment} />
                            </div>
                        </div>
                    </div>
                </div>

            )
        })
    )

}
SnowparkCard.propTypes = {
    snowparks: PropTypes.any
};