import React, { useState, useRef } from "react";
import Typical from "react-typical";
import "./ContactMe.css";
import emailjs from '@emailjs/browser';

import imgBack from "../../../src/images/mailz.jpeg";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

const Result = () => {
  return (
    <p> Your Message Has been successfully sent. I will contact you soon</p>
  )
}

export default function ContactMe(props) {
  const form = useRef();
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_9pu0a9i', 'template_u2ayfxa', form.current, '_2HVfqxDRA1Mkp4e_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
          <a href="#">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="duranmegot801@gmail.com">
            <i className="fa fa-google-plus-square"></i>
          </a>
          <a href="https://www.instagram.com/mengot_duran/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://twitter.com/home">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="fullName" required/>

            <label>Email</label>
            <input type="email" name="email" required/>

            <label>Message</label>
            <textarea type="text" name="message" required/>

            <div className="send-btn">
              <button>
                Submit
              </button>
            </div>
            <div className="row">{ result ? <Result /> : null}</div>
          </form>
        </div>
      </div>
    </div>
  );
}

