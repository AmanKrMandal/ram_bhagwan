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
import Mix from "./Image/Mix";
import DarkPink from "./Image/DarkPink";
import DarkOrange from "./Image/DarkOrange";
import Footer from "./Footer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import lop01 from "./Image/lop01.png";
import lop02 from "./Image/lop02.png";
import lop03 from "./Image/lop03.png";
import lop04 from "./Image/lop04.png";
import lop05 from "./Image/lop05.png";
import lop06 from "./Image/lop06.png";

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

      {/* About us */}

      <div class="about_container">
        <div class="banner_section inner_banner">
          {/* <img src="aboutBanner" /> */}
          <div class="banner_content">
            <h1>About US</h1>
            <div class="breadcrumbs_section">
              <ul>
                <li>
                  <a href="/">
                    Todio.it
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="about_wrapper_area">
          <div class="container">
            <div class="about_content_area">
              <div class="tab_content_box_wrap">
                <div class="tab_content_box">
                  <h2>
                    <span>About Us</span>
                  </h2>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32.
                  </p>
                  <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                    also reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.
                  </p>
                  <h3>
                    List your products on TODIO and effectively reach a high
                    volume of customers
                  </h3>
                  <div class="list_of_product_section">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="list_of_product_box">
                          <div class="list_of_product_box_img">
                            <img src={lop01} />
                          </div>
                          <p>
                            Simple and easy way to target people interested in
                            buying Products
                          </p>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="list_of_product_box">
                          <div class="list_of_product_box_img">
                            <img src={lop02} />
                          </div>
                          <p>10 million monthly users and 2300 clients</p>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="list_of_product_box">
                          <div class="list_of_product_box_img">
                            <img src={lop03} />
                          </div>
                          <p>
                            Easy campaign management, at no additional costs
                          </p>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="list_of_product_box">
                          <div class="list_of_product_box_img">
                            <img src={lop04} />
                          </div>
                          <p>Increase in traffic, sales and brand awareness</p>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="list_of_product_box">
                          <div class="list_of_product_box_img">
                            <img src={lop05} />
                          </div>
                          <p>
                            Affordable, you only pay for customers who visit
                            your site by the CPC model
                          </p>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="list_of_product_box">
                          <div class="list_of_product_box_img">
                            <img src={lop06} />
                          </div>
                          <p>
                            Precise loading and sorting of products from the XML
                            feed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4>
                    <span>todio.it</span> story
                  </h4>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32.
                  </p>
                  <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                    also reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
        <Footer />
      </footer>
    </div>
  );
};

export default App;
