import React, { useEffect, useContext } from "react";

import { Context } from "../store/appContext";

export const Company = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {

        actions.LoadCountryParks();
    }, [])

    return (

        <div className="container">
            <h1 className="container mt-5 text-center">Companies that shape a lot!</h1>
            <div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded" >

                <div className="card-body">
                    <img src="https://i.gifer.com/ICS.gif" className="card-img-top" alt="..." />
                    <h5 className="card-title">Company Name</h5>
                    <p className="card-text">Location:{ }</p>


                </div>
            </div>
        </div >
    )
}