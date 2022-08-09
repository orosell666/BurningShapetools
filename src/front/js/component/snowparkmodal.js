import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";

export const SnowparkModal = (props) => {

    return (

        <div className="modal fade" id={`exampleModal_${props.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    < div >
                        <div className="" >
                            <div className="card-body">
                                <img src className="card-img-top" width={300} height={500} alt="..." />
                                <h5 className="card-title"><strong>{props.name}</strong></h5>
                                <p className="card-text">{props.resort}, {props.location}, {props.country}</p>
                                <p className="card-text" >Shapers: {props.shapers}</p>
                                <p className="card-text">Bullydrivers: {props.bullydrivers}</p>
                                <p className="card-text" >Web: {props.web}</p>
                                <p className="card-text">Machines: {props.machines}</p>
                                <p className="card-text">Company in charge: {props.companies}</p>
                                <p className="card-text">Comment: {props.comment}</p>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </div>

    )



}
