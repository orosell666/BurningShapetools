import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import GoTo from "../component/goto";

export const Company = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.LoadCompanies();
    }, [])


    return (
        <div className="container">
            <h1 className="container mt-5 text-center">These guys push a lot of snow!</h1>
            <div className="container  mt-5">
                <div className="card-group mt-5 ">
                    <div className="row g-4 d-flex flex-row flex-nowrap overflow-auto">
                        {
                            store.companies.map((value, index) => {
                                return (


                                    <div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded" >
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{value.name}</h5>
                                            <img src={"https://play-lh.googleusercontent.com/i5zRnn1P9yqkJW2vLLhn_MiLBxUSZVGeGl-HudSCsUWHUxIgldN54wqL55ILuoe-qgY=w2560-h1440-rw"} className="card-img-top" alt="..." />

                                            <p className="card-text">Location:{value.location}</p>
                                            <Link to="https://{value.web}" className="stretched-link text-dark">
                                                <p className="card-text">{value.web}</p>
                                            </Link>
                                            <GoTo />




                                        </div>
                                    </div>

                                )

                            }
                            )
                        }</div></div></div></div>
    )
}
