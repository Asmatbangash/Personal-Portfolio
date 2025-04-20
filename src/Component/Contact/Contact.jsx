import React from "react";
import Linkdin from "../SocailIcon.jsx/Linkdin";
import Socailicon from "../SocailIcon.jsx/Socailicon";

function Contact() {
  return (
    <>
    <div className="container d-flex justify-content-center align-items-center  flex-column mt-5">
       
    <h1 className="mt-5">Contact Me!</h1>
    <p>Let's Work Together</p>
    <a href="" className="text-decoration-none"><i className="fa-solid fa-paper-plane icon mx-2 "></i>bangashasmat@gmail.com</a>
    <a href="" className="text-decoration-none"><i className="fa-solid fa-phone  icon mx-2 "></i>0335 6976877</a>
    <div className="mt-5">
    <a href="" className="fa-brands fa-facebook icon mx-2 text-decoration-none"></a>
    <a href="" className="fa-brands fa-twitter icon mx-2 text-decoration-none"></a>
    <a href="" className="fa-brands fa-linkedin icon mx-2 text-decoration-none"></a>
    <a href="" className="fa-brands fa-github icon mx-2 text-decoration-none"></a>
    </div>
  </div>
  </>
  );
}

export default Contact;
