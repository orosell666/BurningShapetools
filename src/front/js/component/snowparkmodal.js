import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";

export const SnowparkModal = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {

        actions.LoadSnowpark(store.snowparks);

    }, [])


    return (
        //store.snowparks.map(),

        < div >

            <div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded" >

                <div className="card-body">
                    <img src="https://c.tenor.com/UH_6a9UuIMMAAAAC/cool.gif" className="card-img-top" alt="..." />
                    <h5 className="card-title">Park Name</h5>
                    <p className="card-text">{ } Resort:</p>
                    <p className="card-text">{ } Location:</p>
                    <p className="card-text">{ } Country:</p>
                    <p className="card-text">{ } Shapers:</p>
                    <p className="card-text">{ } Bullydrivers:</p>
                    <p className="card-text">{ } Web:</p>
                    <p className="card-text">{ } Machines:</p>
                    <p className="card-text">{ } image_url:</p>
                    <p className="card-text">{ } Comment:</p>



                </div>
            </div>


        </div >


    )

}