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
                    <img src="https://c.tenor.com/UH_6a9UuIMMAAAAC/cool.gif" className="card-img-top" width={300} height={500} alt="..." />
                    <h5 className="card-title">Park Name</h5>
                    <p className="card-text">{props.snowpark.name} Resort:</p>
                    <p className="card-text">{ } Location:</p>
                    <p className="card-text">{ } Country:</p>
                    <p className="card-text">{ } Shapers:</p>
                    <p className="card-text">{ } Bullydrivers:</p>
                    <p className="card-text">{ } Web:</p>
                    <p className="card-text">{ } Machines:</p>

                    <p className="card-text">{ } Comment:</p>



                </div>
            </div>


        </div >


    )

}
SnowparkModal.propTypes = {
    snowpark: PropTypes.any
};