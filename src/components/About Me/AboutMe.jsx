import "./AboutMe.css";
import myGif from "../../Assets/24S2.gif";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,faGithub,faInstagram ,faTwitter} from "@fortawesome/free-brands-svg-icons";
import ReactDOM from "react-dom";

function AboutMe() {
  return (
    <div className="topContainer1">
      <div className="topContainer2">
        <div className="descSocial">
          <div className="description">
            <h1>Hi there!</h1>
            I'm Raj Kumar.
            <br />
            Born in 2002 in Punjab, India. <br />

            I'm a software engineer graduating in Information Technology from NIT, Jalandhar. I'm passionate about building software that solves real-world problems.
          </div>
          <div className="socialMedia">
            <a href="https://www.linkedin.com/in/raj-kumar-995700238/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin}  className="socialLogo"/>
            </a>
            <a href="https://github.com/raja-rk" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="socialLogo"/>
            </a>
            <a href="https://www.instagram.com/th3rajkumar/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="socialLogo"/>
            </a>
          </div>
        </div>
        <div className="imgbtn">
          <img src={myGif} alt="" className="mygif" />
          <button className="myResume"><a href="https://drive.google.com/file/d/1CL7hcGbLiQGRWDqf7QP-XvaBXy3wNBmP/view?usp=sharing" target="_blank">Download Resume</a></button>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
