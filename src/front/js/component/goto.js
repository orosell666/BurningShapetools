import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../../styles/home.css";




export const GoTo = () => {
    const handleClick = () => {
        window.open("http://www.google.com");
    };

    return (
        <div>

            <button onClick={handleClick}>Twitter</button>
        </div>
    );
}

export default GoTo;