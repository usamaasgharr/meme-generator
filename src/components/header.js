import React from "react";
import logo from "../images/Troll Face.png"

export default function Header(){
    return(
        <header>
            <img src = {logo}/>
            <h2>meme generator</h2>
            <div className="right"></div>
            <h4>React Course - Project 3</h4>

        </header>
    )
}