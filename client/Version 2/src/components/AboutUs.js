import React from "react";
import "./AboutUs.css";
import img1 from "../Images/adrian.jpg";
import img2 from "../Images/caushi.jpg";
import img3 from "../Images/delojan.jpg";
import img4 from "../Images/Shakir.jpg";
import img5 from "../Images/rinoza.jpg";
import img6 from "../Images/Abdullah.jpg";

function AboutUs() {
  return (
    <div className="about-us-main">
      <div className="about-us-first">
        <div className="about-us-text1">
          <h1 id="aboutUsH1">Hello World this is S C A A R D</h1>
          <h2 id="aboutUsH2">S C A A R D is everywhere..</h2>
          <h3 id="aboutUsH3">
            Learn more about our story and the hard-works <br /> people behind
            the phone is developers
          </h3>
        </div>
        <div className="ourImage"></div>
      </div>
      <div className="about-us-second">
        <div className="about-us-text2">
          <h2 id="aboutUsH2">
            its all started in DEVADHA
            <br />
            <br />
          </h2>
          <h3 id="aboutUsH3">
            ENNATHA SOLLA NAAN ENNATHA SOLLA SOLLA VARTHAYA ILLA...
            <br />
            NIMMADHI ILLA INI NIMMADHI ILLAAA SDGP LIFE THOLLAA
          </h3>
        </div>
      </div>
      <div className="about-us-third">
        <div className="developer">
          <img src={img1} />
          <h3 id="name">Adrian Anchelo</h3>
          <h6 id="workTitle">back-end Developer</h6>
        </div>

        <div className="developer">
          <img src={img2} />
          <h3 id="name">Krishnamoorthy Caucidheesan </h3>
          <h6 id="workTitle">ML - Developer</h6>
        </div>

        <div className="developer">
          <img src={img3} />
          <h3 id="name">George Delojan</h3>
          <h6 id="workTitle">back-end developer</h6>
        </div>

        <div className="developer">
          <img src={img4} />
          <h3 id="name">Shakir Ahamed</h3>
          <h6 id="workTitle">Front-end developer</h6>
        </div>

        <div className="developer">
          <img src={img5} />
          <h3 id="name">Rinoza Jiffry</h3>
          <h6 id="workTitle">ML - developer</h6>
        </div>

        <div className="developer">
          <img src={img6} />
          <h3 id="name">Abdullah</h3>
          <h6 id="workTitle">Front-end developer</h6>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;