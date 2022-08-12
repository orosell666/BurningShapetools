import React from "react";


export const SnowparkModal = (props) => {
    const imageSize = {
        width: "500",

    }

    return (

        <div className="modal fade" id={`exampleModal_${props.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">


                    <div className="modal-body">
                        <h5 className="modal-title"><strong>{props.name}</strong></h5>
                        <img src="https://c.tenor.com/_JHkX5nop_YAAAAd/skulltalk.gif" className="image-fluid" style={imageSize} alt="..." />

                        <p className="modal-text">{props.resort}, {props.location}, {props.country}</p>
                        <p className="modal-text" >Shapers: {props.shapers}</p>
                        <p className="modal-text">Bullydrivers: {props.bullydrivers}</p>
                        <p className="modal-text" >Web: {props.web}</p>
                        <p className="modal-text">Machines: {props.machines}</p>
                        <p className="modal-text">Company in charge: {props.companies}</p>
                        <p className="modal-text">Comment: {props.comment}</p>
                    </div>


                </div>
            </div>
        </div>

    )



}
