import React, { useState } from "react";
import "./skill.css";
import CppLog from "../../Assets/cpp.png";
import html from "../../Assets/html.png";
import css from "../../Assets/css.png";
import JS from "../../Assets/JS.png";
import react from "../../Assets/react.png";
import mongodb from "../../Assets/mongodb.png";
import nodejs from "../../Assets/nodejs.png";
import mysql from "../../Assets/mysql.png";

function skills(){
    return (
        <div className="cont1">
            <div className="cont2">
                <div className="title"><h1>Skills</h1></div>
                <div className="slider">
                <ul className="slide-track">
                    <li className="slide">
                        <div className="skilllogo"><img src={CppLog} alt="Cpp"/></div>
                        <div className="skilltitle"><h2>Cpp</h2></div>
                    </li>
                    <li className="slide">
                        <div className="skilllogo"><img src={html} alt="html"/></div>
                        <div className="skilltitle"><h2>HTML</h2></div>
                    </li>
                    <li className="slide">
                        <div className="skilllogo"><img src={css} alt="css"/></div>
                        <div className="skilltitle"><h2>CSS</h2></div>
                    </li>
                    <li className="slide">
                        <div className="skilllogo"><img src={JS} alt="javascript"/></div>
                        <div className="skilltitle"><h2>Javascript</h2></div>
                    </li>
                    <li className="slide">
                        <div className="skilllogo"><img src={react} alt="react"/></div>
                        <div className="skilltitle"><h2>React.js</h2></div>
                    </li>
                    <li className="slide">
                        <div className="skilllogo"><img src={nodejs} alt="nodejs"/></div>
                        <div className="skilltitle"><h2>Node.js</h2></div>
                    </li>
                    <li className="slide">
                        <div className="skilllogo"><img src={mongodb} alt="mongodb"/></div>
                        <div className="skilltitle"><h2>MongoDB</h2></div>
                    </li>
                    <li className="slide">
                        <div className="skilllogo"><img src={mysql} alt="mysql"/></div>
                        <div className="skilltitle"><h2>Mysql</h2></div>
                    </li>

                    <li className="slide">
                        <div className="skilllogo"><img src={CppLog} alt="Cpp"/></div>
                        <div className="skilltitle"><h2>Cpp</h2></div>
                    </li>
                    <li className="slide">
                        <div className="skilllogo"><img src={html} alt="html"/></div>
                        <div className="skilltitle"><h2>HTML</h2></div>
                    </li>
                    <li className="slide">
                        <div className="skilllogo"><img src={css} alt="css"/></div>
                        <div className="skilltitle"><h2>CSS</h2></div>
                    </li>
                    <li className="slide">
                        <div className="skilllogo"><img src={JS} alt="javascript"/></div>
                        <div className="skilltitle"><h2>Javascript</h2></div>
                    </li>
                    <li className="slide">
                        <div className="skilllogo"><img src={react} alt="react"/></div>
                        <div className="skilltitle"><h2>React.js</h2></div>
                    </li>
                    <li className="slide">
                        <div className="skilllogo"><img src={nodejs} alt="nodejs"/></div>
                        <div className="skilltitle"><h2>Node.js</h2></div>
                    </li>
                    <li className="slide">
                        <div className="skilllogo"><img src={mongodb} alt="mongodb"/></div>
                        <div className="skilltitle"><h2>MongoDB</h2></div>
                    </li>
                    <li className="slide">
                        <div className="skilllogo"><img src={mysql} alt="mysql"/></div>
                        <div className="skilltitle"><h2>Mysql</h2></div>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}
export default skills 