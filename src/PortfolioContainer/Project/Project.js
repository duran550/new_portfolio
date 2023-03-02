import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Project.css";
import { BiWorld, BiCode } from "react-icons/bi";
import cocktail from "../../../src/Img/Testimonial/cocktail.png";
import accordation from "../../../src/Img/Testimonial/accordation.png";
import colorgen from "../../../src/Img/Testimonial/colorGen.png";
import tour from "../../../src/Img/Testimonial/Tour.png";
import textGen from "../../../src/Img/Testimonial/textGen.png";
import tabs from "../../../src/Img/Testimonial/tabs.png";
import stripe from "../../../src/Img/Testimonial/stripe.png";
import sidebar from "../../../src/Img/Testimonial/sidebar.png";
import shapebg from "../../../src/Img/Testimonial/shape-bg.png";
import reviews from "../../../src/Img/Testimonial/reviews.png";
import netlify from "../../../src/Img/Testimonial/netlify.png";
import navbar from "../../../src/Img/Testimonial/navbar.png";
import groceryBud from "../../../src/Img/Testimonial/groceryBud.png";
import cart from "../../../src/Img/Testimonial/cart.png";
import birthdayReminder from "../../../src/Img/Testimonial/birthdayReminder.png";
import menu from "../../../src/Img/Testimonial/Menu.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading title={"Projects"} subHeading={"Sample Projects Built"} />
      {/* <section className="testimonial-section" id={props.id || ""}> */}
      <section className="" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={cocktail}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">CockTails</h5>
                  <p className="card-text">
                    This displays various drinks type and give details of Each
                    drink
                  </p>
                  <span className="view">
                    <a target="_blank" href="https://duranscocktail.netlify.app/">
                      <h5 className="website">View Website</h5>
                        {/* <BiWorld className="logo" /> */}
                    </a>
                  </span>
                  <span className="view">
                    <a target="_blank" href="https://github.com/mengotduran/cocktail">
                      <h5 className="source-code">Source Code</h5>
                    </a>
                  </span>
                </div>
              </div>

              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={colorgen}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">colorGen</h5>
                  <p className="card-text">
                    You can search, copy and paste colors from here
                  </p>
                  <span href="#" className="view">
                    <a target="_blank" href="https://duranscolorgen.netlify.app/">
                      <h5 className="website">View Website</h5>
                        {/* <BiWorld className="logo" /> */}
                    </a>
                  </span>
                  <span className="view">
                    <a target="_blank" href="https://github.com/mengotduran/color-generator">
                      <h5 className="source-code">Source Code</h5>
                    </a>
                  </span>
                </div>
              </div>

              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={accordation}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">accordation</h5>
                  <p className="card-text">
                    This gives you an option to see or hide text
                  </p>
                  <span href="#" className="view">
                    <a target="_blank" href="https://duransaccordation.netlify.app/">
                      <h5 className="website">View Website</h5>
                        {/* <BiWorld className="logo" /> */}
                    </a>
                  </span>
                  <span className="view">
                    <a target="_blank" href="https://github.com/mengotduran/accordation">
                      <h5 className="source-code">Source Code</h5>
                    </a>
                  </span>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={tour}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">tour</h5>
                  <p className="card-text">
                    nice tours images and info
                  </p>
                  <span href="#" className="view">
                    <a target="_blank" href="https://duranstour.netlify.app/">
                      <h5 className="website">View Website</h5>
                        {/* <BiWorld className="logo" /> */}
                    </a>
                  </span>
                  <span className="view">
                    <a target="_blank" href="https://github.com/mengotduran/Tours">
                      <h5 className="source-code">Source Code</h5>
                    </a>
                  </span>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={textGen}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">textGen</h5>
                  <p className="card-text">
                    Generate Text
                  </p>
                  <span href="#" className="view">
                    <a target="_blank" href="https://duranstextgen.netlify.app/">
                      <h5 className="website">View Website</h5>
                        {/* <BiWorld className="logo" /> */}
                    </a>
                  </span>
                  <span className="view">
                    <a target="_blank" href="https://github.com/mengotduran/text-generator">
                      <h5 className="source-code">Source Code</h5>
                    </a>
                  </span>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={tabs}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">tabs</h5>
                  <p className="card-text">
                    Generate Text
                  </p>
                  <span href="#" className="view">
                    <a target="_blank" href="https://durantabs.netlify.app/">
                      <h5 className="website">View Website</h5>
                        {/* <BiWorld className="logo" /> */}
                    </a>
                  </span>
                  <span className="view">
                    <a target="_blank" href="https://github.com/mengotduran/react-tabs">
                      <h5 className="source-code">Source Code</h5>
                    </a>
                  </span>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={stripe}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">stripe</h5>
                  <p className="card-text">
                    stripe landing page clone
                  </p>
                  <span href="#" className="view">
                    <a target="_blank" href="https://duranstripemenu.netlify.app/">
                      <h5 className="website">View Website</h5>
                        {/* <BiWorld className="logo" /> */}
                    </a>
                  </span>
                  <span className="view">
                    <a target="_blank" href="hhttps://github.com/mengotduran/stripeMenu">
                      <h5 className="source-code">Source Code</h5>
                    </a>
                  </span>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={sidebar}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">sidebar</h5>
                  <p className="card-text">
                    displays modal and side bar
                  </p>
                  <span href="#" className="view">
                    <a target="_blank" href="https://duransidebar.netlify.app/">
                      <h5 className="website">View Website</h5>
                        {/* <BiWorld className="logo" /> */}
                    </a>
                  </span>
                  <span className="view">
                    <a target="_blank" href="https://github.com/mengotduran/sidebar-modal">
                      <h5 className="source-code">Source Code</h5>
                    </a>
                  </span>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={reviews}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">reviews</h5>
                  <p className="card-text">
                    static slide display of people
                  </p>
                  <span href="#" className="view">
                    <a target="_blank" href="https://duranreviews.netlify.app/">
                      <h5 className="website">View Website</h5>
                        {/* <BiWorld className="logo" /> */}
                    </a>
                  </span>
                  <span className="view">
                    <a target="_blank" href="https://github.com/mengotduran/reviews.react">
                      <h5 className="source-code">Source Code</h5>
                    </a>
                  </span>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={netlify}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">netlify</h5>
                  <p className="card-text">
                    dynaic slide display 
                  </p>
                  <span href="#" className="view">
                    <a target="_blank" href="https://duransslider.netlify.app/">
                      <h5 className="website">View Website</h5>
                        {/* <BiWorld className="logo" /> */}
                    </a>
                  </span>
                  <span className="view">
                    <a target="_blank" href="https://github.com/mengotduran/react-slider">
                      <h5 className="source-code">Source Code</h5>
                    </a>
                  </span>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={navbar}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">navbar</h5>
                  <p className="card-text">
                    navbar display 
                  </p>
                  <span href="#" className="view">
                    <a target="_blank" href="https://duransnavbar.netlify.app/">
                      <h5 className="website">View Website</h5>
                        {/* <BiWorld className="logo" /> */}
                    </a>
                  </span>
                  <span className="view">
                    <a target="_blank" href="https://github.com/mengotduran/navbar">
                      <h5 className="source-code">Source Code</h5>
                    </a>
                  </span>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={groceryBud}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">groceryBud</h5>
                  <p className="card-text">
                    Items can be added, deleted and edited 
                  </p>
                  <span href="#" className="view">
                    <a target="_blank" href="https://duransgrocerybud.netlify.app/">
                      <h5 className="website">View Website</h5>
                        {/* <BiWorld className="logo" /> */}
                    </a>
                  </span>
                  <span className="view">
                    <a target="_blank" href="https://github.com/mengotduran/grocerybud">
                      <h5 className="source-code">Source Code</h5>
                    </a>
                  </span>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={cart}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">cart</h5>
                  <p className="card-text">
                    You can add and delete items. It also displays the total amount on item in $ on cart 
                  </p>
                  <span href="#" className="view">
                    <a target="_blank" href="https://duranscart.netlify.app/">
                      <h5 className="website">View Website</h5>
                        {/* <BiWorld className="logo" /> */}
                    </a>
                  </span>
                  <span className="view">
                    <a target="_blank" href="https://github.com/mengotduran/Cart">
                      <h5 className="source-code">Source Code</h5>
                    </a>
                  </span>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={birthdayReminder}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">birthdayReminder</h5>
                  <p className="card-text">
                    Simple birthdayReminder  
                  </p>
                  <span href="#" className="view">
                    <a target="_blank" href="https://duransbirthdayreminder.netlify.app/">
                      <h5 className="website">View Website</h5>
                        {/* <BiWorld className="logo" /> */}
                    </a>
                  </span>
                  <span className="view">
                    <a target="_blank" href="https://github.com/mengotduran/BirthdayReminder">
                      <h5 className="source-code">Source Code</h5>
                    </a>
                  </span>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={menu}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">menu</h5>
                  <p className="card-text">
                    various food types, prices and some basic informtion  
                  </p>
                  <span href="#" className="view">
                    <a target="_blank" href="https://duransmenu.netlify.app/">
                      <h5 className="website">View Website</h5>
                        {/* <BiWorld className="logo" /> */}
                    </a>
                  </span>
                  <span className="view">
                    <a target="_blank" href="https://github.com/mengotduran/react-menu">
                      <h5 className="source-code">Source Code</h5>
                    </a>
                  </span>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      {/* <div className="footer-image">
        <img src={shape} alt="image not responding" />
      </div> */}
    </div>
  );
}
