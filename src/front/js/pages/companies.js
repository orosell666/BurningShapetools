import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from 'prop-types';

export const Company = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.LoadCompanies();
    }, [])


    return (
        <div className="container">
            <h1 className="container mt-5 text-center">Take a look in your Country</h1>
            <div className="container  mt-5">
                {
                    store.companies.map((value, index) => {
                        return (


                            <div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded" >

                                <div className="card-body text-center">
                                    <img src="https://i.gifer.com/ICS.gif" className="card-img-top" alt="..." />
                                    <h5 className="card-title">{value.name}</h5>
                                    <p className="card-text">Location:{ }</p>
                                    <p className="card-text">Website:{ }</p>



                                </div>
                            </div>

                        )

                    }
                    )
                }</div></div>
    )
}
