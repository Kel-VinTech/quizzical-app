import React from "react";
import { nanoid } from "nanoid";
import './MainPage.css'

const mainPage = (props) => {
    return (
        <div className="main_page">
            <h2>Quizzical </h2>
             <p>Try More, Gain More</p>
            <button className="main_btn" onClick={() => props.start()}>Start quiz</button>

        </div>
    )
}

export default mainPage