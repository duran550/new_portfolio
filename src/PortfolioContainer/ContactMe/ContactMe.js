import React, { useState, useRef } from "react";
// import Typical from "react-typical";
import "./ContactMe.css";
import emailjs from '@emailjs/browser';

import imgBack from "../../../src/images/mailz.jpeg";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import toast, {Toaster} from "react-hot-toast";

const Result = () => {
  return (
    <p class="msg-status"> Your Message Has been successfully sent. I will contact you soon</p>
  )
}

export default function ContactMe(props) {
  const form = useRef();
  const [loading, setLoading] = useState(false)
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const [result, showResult] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   const serviceId = 'service_zpmw66h';
  //   const templateId = 'template_u2ayfxa';
  //   const publicKey = 'RH8v6llJe5ihhMrv6'
  
  //   const templateParams = {
  //     from_name: name,
  //     from_email:email,
  //     to_name:'Mengot Duran',
  //     message:message
  //   }

  //   emailjs.send(serviceId, templateId, templateParams, publicKey)
  //   .then((response) => {
  //       setName('')
  //       setEmail('')
  //       setMessage('')
  //       console.log('Email was sent successfuly', response)
  //   }).catch((error) => {
  //     console.log('Error Sending Email', error)
  //   })
  // }

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs
      .sendForm('service_zpmw66h', 'template_u2ayfxa', form.current, 'RH8v6llJe5ihhMrv6')
      .then(
        (response) => {
          toast.success('Message Sent Successfully')
          setLoading(false)
          console.log('SUCCESS!', response);
        },
        (error) => {
          toast.error('Please Check your connection and try again')
          setLoading(false)
          console.log('FAILED...', error.text);
          console.log('FAILED..., message not sent');
        },
      );
      e.target.reset();
      showResult(true);
  };


  return (
    <div className="main-container" id={props.id || ""}>
      <Toaster />
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            {/* <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} /> */}
            Get In Touch 📧
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
            <input type="text" name="user_name" required />

            <label>Email</label>
            <input type="email" name="user_email" required/>

            <label>Message</label>
            <textarea type="text" name="message" required />

            {/* <div className="send-btn">
              <input type="submit" value="Send" />
            </div> */}
            <button disabled={loading ? true : false} type="send" className={loading ? 'disabled' : 'send-btn'}>{loading ? 'Loading...' : 'Send'}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

