import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";

export const SnowparkCard = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.LoadSnowpark();
    })

    return (

        <div>
            <h1>{store.snowparks.name}</h1>
        </div>


    )

}