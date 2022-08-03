import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";

export const SnowparkCard = () => {
    const { store } = useContext(Context);

    fetch(process.env.BACKEND_URL + "/api/snowparks")
        .then(resp => resp.json())

        .then(data => setStore({ snowparks: data }))
        .catch(error => console.log("Error al cargar snowparks", error));

    return (
        //store.snowparks.map(value, index),

        < div >

            <div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded" >

                <div className="card-body">
                    <h5 className="card-title">hello hello</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div >


    )

}