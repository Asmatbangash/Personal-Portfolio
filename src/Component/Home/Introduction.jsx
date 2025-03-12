import React from "react";
import MyComponent from "../MainBody/Typed";
import img from "../../assets/images/asmat.png";
import Socailicon from "../SocailIcon.jsx/Socailicon";
import './Intro.css'

function Introduction() {
  return (
    <div className="container py-4">
      <div className="row align-items-md-stretch">
        <div className="col-md-6 d-flex">
            
          <div className="h-100 p-5 rounded-circle ">
            <h2>Hi! it's me</h2>
            <h1 className="fs-1" style={{ color: "orange" }}>
              Asmat Ullah
            </h1>
            <h4 className="flex">
             & I am a{" "}
              <span style={{ color: "#14B72C", marginLeft: "10px" }}>
                {" "}
                <MyComponent />
              </span>{" "}
            </h4>
            <p className="d-flex">
              "I am an undergraduate student pursuing a Bachelor's degree in
              Computer Science at The Agriculture University of Peshawar. I
              recently completed a Full-Stack Developer internship at p92 IT
              Software House in Khyber Pakhtunkhwa (KPK).
            </p>
            <div>
              <button type="button" className="resume-btn">
                Download Resume
              </button>
            </div>
          </div>
          <Socailicon />
        </div>
        <div className="col-md-6 d-flex">
            <img src={img} alt="" width="100%" height="80%" />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
