import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";

export const SnowparkModal = (props) => {
    const { store, actions } = useContext(Context);

    useEffect(() => {

        actions.LoadSelectedSnowpark(store.snowparks);

    }, [])


    return (
        store.snowparks.map((value, id) => {

            return (

                < div >

                    <div className="" >

                        <div className="card-body">
                            <img src className="card-img-top" width={300} height={500} alt="..." />
                            <h5 className="card-title" id={`id${value.id}`}><strong>{value.name}</strong></h5>
                            <p className="card-text" id={`id${value.id}`}>Resort: {value.resort} </p>
                            <p className="card-text" id={`id${value.id}`}>Location:  {value.location}</p>
                            <p className="card-text" id={`id${value.id}`}>Country: {value.country}</p>
                            <p className="card-text" id={`id${value.id}`}>Shapers: {value.shapers}</p>
                            <p className="card-text" id={`id${value.id}`}>Bullydrivers: {value.bullydrivers}</p>
                            <p className="card-text" id={`id${value.id}`}>Web: {value.web}</p>
                            <p className="card-text" id={`id${value.id}`}>Machines: {value.machines}</p>

                            <p className="card-text">Comment: {value.comment}</p>



                        </div>
                    </div>


                </div >
            )
        })
    )

}
