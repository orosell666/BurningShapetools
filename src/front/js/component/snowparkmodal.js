import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
export const SnowparkModal = (props) => {
    const { store, actions } = useContext(Context);

    useEffect(() => {

        actions.LoadSnowpark(store.snowparks);

    }, [])


    return (


        < div >

            <div className="" >

                <div className="card-body">
                    <img src={props.snowpark.image_url} className="card-img-top" width={300} height={500} alt="..." />
                    <h5 className="card-title"><strong>{props.snowpark.name}</strong></h5>
                    <p className="card-text">Resort: {props.snowpark.resort} </p>
                    <p className="card-text">Location:  {props.snowpark.location}</p>
                    <p className="card-text">Country: {props.snowpark.country}</p>
                    <p className="card-text">Shapers: {props.snowpark.shapers}</p>
                    <p className="card-text">Bullydrivers: {props.snowpark.bullydrivers}</p>
                    <p className="card-text">Web: {props.snowpark.web}</p>
                    <p className="card-text">Machines: {props.snowpark.machines}</p>

                    <p className="card-text">Comment: {props.snowpark.companies}</p>



                </div>
            </div>


        </div >


    )

}
SnowparkModal.propTypes = {
    snowpark: PropTypes.any
};