import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { SnowparkModal } from "./snowparkmodal"
import { Link, useHistory } from "react-router-dom";

export const SnowparkCard = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {

        actions.LoadSnowpark(store.snowparks);

    }, [])


    return (
        //store.snowparks.map(),.

        < div >

            <div className="card col-md-3 mb-3 me-3 shadow p-3 mb-5 bg-body rounded" >

                <div className="card-body">
                    <img src="https://c.tenor.com/UH_6a9UuIMMAAAAC/cool.gif" className="card-img-top" alt="..." />
                    <h5 className="card-title">hello hello</h5>
                    <p className="card-text">{store.snowparks.name}</p>
                    <button type="button" className="btn btn-dark" data-toggle="modal" data-target="bd-example-modal-xl">Extra large modal</button>

                    <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
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

}