import React from "react";
import "./App.css";
import logo from "./Image/logo.png";
import banner from "./Image/banner.png";
import contact from "./Image/contact.png";
import dev from "./Image/dev.png";
import market from "./Image/market.png";
import mobile from "./Image/mobile.png";
import pen from "./Image/pen.png";
import sci from "./Image/sci.png";
import seo from "./Image/seo.png";
import service from "./Image/service.png";
import spiral from "./Image/spiral.png";
import Call from "./Image/Call";
import CircleSvg from "./Image/CircleSvg";
import BackBule from "./Image/BackBule";
import BackYellow from "./Image/BackYellow";
import BackGreen from "./Image/BackGreen";
import cross from "./Image/cross.png";
import menu from "./Image/menu-icon.png";
// import LightBlue from "./Image/LightBlue";
// import Orange from "./Image/Orange";
// import Lblue from "./Image/Lblue";
import Mix from "./Image/Mix";
import DarkPink from "./Image/DarkPink";
import DarkOrange from "./Image/DarkOrange";

const App = () => {
  return (
    <div className="main_section">
      <header id="header" className="main_header inner_header">
        <div className="header_top inner_data">
          <div className="container">
            <div className="logo_social">
              <div>
                <img src={logo} />
              </div>
              <div>
                <nav className="nav_sec">
                  <ul>
                    <li className="active">
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="installtion-videos.html">Services</a>
                    </li>
                    <li>
                      <a href="contact.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </nav>
                <span class="toggle-menu">
                  <img src={menu} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* BANNER Section*/}

      <section class="banner_sec">
        <div className="BackYellow">
          <BackYellow />
        </div>
        <div className="container">
          <div className="inner_banner">
            <div className="row justify-content-between">
              <div className="col-lg-6 custom-flex-container  ">
                <h1>Transforming Ideas</h1>
                <h1>
                  Into <span>Powerful Solutions</span>
                </h1>
                <p>
                  For startups and growing businesses, web and mobile solutions,
                  cloud expertise, and dynamic digital marketing strategies.
                  Partner with us for a transformative journey into the digital
                  realm.
                </p>
                <div className="banner_call">
                  <a class="banner_call_button">
                    <div class="banner_call_icon">
                      <Call />
                    </div>
                    <div class="banner_call_text">Get a Free Consultation</div>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 custom-flex-container">
                <img className="banner_img" src={banner} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services section */}

      <section className="services ">
        <div className="BackBule">
          <BackBule />
        </div>
        {/* <div className="BackBule1">
          <BackBule />
        </div> */}
        <div className="container">
          <div className="services_sec ">
            <div className="row justify-content-between">
              <div className="col-lg-7 services_data">
                <h2>We provide the best web services</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, curae
                  posuere donec tellus eu egestas aliquet, lacinia parturient
                  facilisi quam dictum suspendisse. Tincidunt gravida vivamus
                </p>
                <ul>
                  <li>
                    <CircleSvg />
                    <span>Most easy premium web design process</span>
                  </li>
                  <li>
                    <CircleSvg />
                    <span>Research & development before starting</span>
                  </li>
                  <li>
                    <CircleSvg />
                    <span>Making a quality design ideas</span>
                  </li>
                  <li>
                    <CircleSvg />
                    <span>Research & development before starting</span>
                  </li>
                  <li>
                    <CircleSvg />
                    <span>Making a quality design ideas</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 custom-flex-container">
                <img src={service} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}

      <section className="offer">
        <div className="BackGreen">
          <BackGreen />
        </div>
        {/* <div className="Red">
          <Red />
        </div>
        <div className="BackGreen1">
          <BackGreen />
        </div>
        <div className="Pink">
          <Pink />
        </div>
        <div className="LightBlue">
          <LightBlue />
        </div>
        <div className="Orange">
          <Orange />
        </div>
        <div className="Lblue">
          <Lblue />
        </div> */}
        <div className="offer_headind">Services We’re Offering</div>
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-lg-5 offer_flex">
              <div className="offer_sec">
                <img src={pen} />
                <h4>Web Design</h4>
                <p>
                  For startups and growing businesses, web and mobile solutions,
                  cloud expertise, and dynamic digital marketing strategies.
                  Partner with us for a transformative journey into the digital
                  realm.
                </p>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="offer_sec">
                <img src={mobile} />
                <h4>Web/Mobile Application</h4>
                <p>
                  For startups and growing businesses, web and mobile solutions,
                  cloud expertise, and dynamic digital marketing strategies.
                  Partner with us for a transformative journey into the digital
                  realm.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="offer_sec">
                <img src={seo} />
                <h4>SEO</h4>
                <p>
                  For startups and growing businesses, web and mobile solutions,
                  cloud expertise, and dynamic digital marketing strategies.
                  Partner with us for a transformative journey into the digital
                  realm.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="offer_sec">
                <img src={market} />
                <h4>Digital Marketing</h4>
                <p>
                  For startups and growing businesses, web and mobile solutions,
                  cloud expertise, and dynamic digital marketing strategies.
                  Partner with us for a transformative journey into the digital
                  realm.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="offer_sec">
                <img src={dev} />
                <h4>Dev Ops</h4>
                <p>
                  For startups and growing businesses, web and mobile solutions,
                  cloud expertise, and dynamic digital marketing strategies.
                  Partner with us for a transformative journey into the digital
                  realm.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="offer_sec">
                <img src={sci} />
                <h4>Data Science</h4>
                <p>
                  For startups and growing businesses, web and mobile solutions,
                  cloud expertise, and dynamic digital marketing strategies.
                  Partner with us for a transformative journey into the digital
                  realm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}

      <section className="contact">
        <div className="Mix">
          <Mix />
        </div>
        <div className="DarkPink">
          <DarkPink />
        </div>

        <div className="contact_div">Contact Us</div>
        <div className="container">
          <img className="spiral_img" src={spiral} />
          <div className="contact_sec">
            <div className="row justify-content-between align-content-center">
              <div className="col-lg-5 contact_img">
                <img src={contact} />
              </div>
              <div className="col-lg-5">
                <form>
                  <label class="form-label labelStyle">Name:</label>
                  <input
                    class="form-control"
                    placeholder="Enter name"
                    type="text"
                    name="name"
                  />
                  <label class="form-label labelStyle">Email:</label>
                  <input
                    class="form-control"
                    placeholder="Enter email"
                    type="email"
                    name="email"
                  />
                  <label class="form-label labelStyle">Phone:</label>
                  <input
                    class="form-control"
                    placeholder="Enter phone"
                    type="tel"
                    name="phone"
                  />
                  <button className="button" type="submit">
                    Contact
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer>
        <div className="DarkOrange">
          <DarkOrange />
        </div>
        <div>Copyright © 2021 Micro Technologies All Right Reserved</div>
      </footer>
    </div>
  );
};

export default App;
