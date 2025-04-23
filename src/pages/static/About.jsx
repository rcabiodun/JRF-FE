import "../../App.css";
import "../../assets/img/favicon.ico";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/owl.carousel.min.css";
import "../../assets/css/slicknav.css";
import "../../assets/css/flaticon.css";
import "../../assets/css/progressbar_barfiller.css";
import "../../assets/css/gijgo.css";
import "../../assets/css/animate.min.css";
import "../../assets/css/animated-headline.css";
import "../../assets/css/magnific-popup.css";
import "../../assets/css/fontawesome-all.min.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/slick.css";
import "../../assets/css/nice-select.css";
import "../../assets/css/style.css";
import logoImg from "../../assets/img/logo/logo.png";
import "../../assets/css/landingPage.css";
// import "../../assets/scss/_about.scss";
// import "./assets/js/vendor/modernizr-3.5.0.min.js";
// import "./assets/js/vendor/jquery-1.12.4.min.js";
// import "./assets/js/popper.min.js";
// import "./assets/js/bootstrap.min.js";
// import "./assets/js/jquery.slicknav.min.js";
// import "./assets/js/owl.carousel.min.js";
// import "./assets/js/slick.min.js";
// import "./assets/js/wow.min.js";
// import "./assets/js/animated.headline.js";
// import "./assets/js/jquery.magnific-popup.js";
// import "./assets/js/gijgo.min.js";
// import "./assets/js/jquery.nice-select.min.js";
// import "./assets/js/jquery.sticky.js";
// import "./assets/js/jquery.barfiller.js";
// import "./assets/js/jquery.counterup.min.js";
// import "./assets/js/waypoints.min.js";
// import "./assets/js/jquery.countdown.min.js";
// import "./assets/js/hover-direction-snake.min.js";
// import "./assets/js/contact.js";
// import "./assets/js/jquery.form.js";
// import "./assets/js/jquery.validate.min.js";
// import "./assets/js/mail-script.js";
// import "./assets/js/jquery.ajaxchimp.min.js";
// import "./assets/js/plugins.js";
// import "./assets/js/main.js";

import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

function AboutPage() {
  return (
    <div>
      <NavBar />
      <main>
        <div class="slider-area2">
          <div class="slider-height2 d-flex align-items-center">
            <div class="container">
              <div class="row">
                <div class="col-xl-12">
                  <div class="hero-cap hero-cap2 pt-20 text-center">
                    <h2>About US</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="service-area section-padding30">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                <div class="section-tittle text-center mb-80">
                  <span>What we are doing</span>
                  <h2>Some of the causes We Support</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat text-center mb-50">
                  <div class="cat-icon">
                    <span class="flaticon-null-1"></span>
                  </div>
                  <div class="cat-cap">
                    <h5>
                      <a href="services.html">Human Trafficking</a>
                    </h5>
                    <p>
                      Funding rescue operations, rehabilitation, and legal
                      support for women & children.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat active text-center mb-50">
                  <div class="cat-icon">
                    <span class="flaticon-think"></span>
                  </div>
                  <div class="cat-cap">
                    <h5>
                      <a href="services.html">
                        Sex Trafficking & Sexual Violence
                      </a>
                    </h5>
                    <p>
                      Providing medical care, psychological support, and
                      advocacy.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat text-center mb-50">
                  <div class="cat-icon">
                    <span class="flaticon-gear"></span>
                  </div>
                  <div class="cat-cap">
                    <h5>
                      <a href="services.html">
                        Child Labor & Modern-Day Slavery
                      </a>
                    </h5>
                    <p>
                      Supporting organizations rescuing and rehabilitating
                      victims.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="about-low-area section-padding2">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-10">
                <div class="about-caption mb-50">
                  <div class="section-tittle mb-35">
                    <span>About our foundetion</span>
                    <h2>We Are In A Mission To Help Helpless</h2>
                  </div>
                  <p>
                    To raise financial and social support to combat human rights
                    violations, advocate for justice, and provide relief to
                    victims of modern-day injustices.
                  </p>
                  <p>
                    We connect individuals, corporate bodies, institutions, and
                    foundations with causes that need urgent intervention,
                    ensuring that funds directly support victims and initiatives
                    fighting against systemic injustices.
                  </p>
                </div>
                <a href="about.html" class="btn">
                  About US
                </a>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="about-img ">
                  <div class="about-font-img d-none d-lg-block">
                    <img
                      src={require("../../assets/img/gallery/about2.png")}
                      alt=""
                    />
                  </div>
                  <div class="about-back-img ">
                    <img
                      src={require("../../assets/img/gallery/about1.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="wantToWork-area ">
          <div class="container">
            <div
              class="wants-wrapper w-padding2  section-bg"
              style={{
                backgroundImage: `url(${require("../../assets/img/gallery/section_bg01.png")})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundAttachment: "fixed",
              }}
            >
              <div class="row align-items-center justify-content-between">
                <div class="col-xl-5 col-lg-9 col-md-8">
                  <div class="wantToWork-caption wantToWork-caption2">
                    <h2>Lets Chenge The World With Humanity</h2>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4">
                  <a href="#" class="btn white-btn f-right sm-left">
                    Become A Volunteer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="testimonial-area testimonial-padding">
          <div class="container">
            <div class="row d-flex justify-content-center">
              <div class="col-xl-8 col-lg-8 col-md-10">
                <div class="h1-testimonial-active dot-style">
                  <div class="single-testimonial text-center">
                    <div class="testimonial-caption ">
                      <div class="testimonial-founder">
                        <div class="founder-img mb-40">
                          <img
                            src={require("../../assets/img/gallery/testimonial.png")}
                            alt=""
                          />
                          <span>Margaret Lawson</span>
                          <p>Creative Director</p>
                        </div>
                      </div>
                      <div class="testimonial-top-cap">
                        <p>
                          “I am at an age where I just want to be fit and
                          healthy our bodies are our responsibility! So start
                          caring for your body and it will care for you. Eat
                          clean it will care for you and workout hard.”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="single-testimonial text-center">
                    <div class="testimonial-caption ">
                      <div class="testimonial-founder">
                        <div class="founder-img mb-40">
                          <img
                            src={require("../../assets/img/gallery/testimonial.png")}
                            alt=""
                          />
                          <span>Margaret Lawson</span>
                          <p>Creative Director</p>
                        </div>
                      </div>
                      <div class="testimonial-top-cap">
                        <p>
                          “I am at an age where I just want to be fit and
                          healthy our bodies are our responsibility! So start
                          caring for your body and it will care for you. Eat
                          clean it will care for you and workout hard.”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="single-testimonial text-center">
                    <div class="testimonial-caption ">
                      <div class="testimonial-founder">
                        <div class="founder-img mb-40">
                          <img
                            src={require("../../assets/img/gallery/testimonial.png")}
                            alt=""
                          />
                          <span>Margaret Lawson</span>
                          <p>Creative Director</p>
                        </div>
                      </div>
                      <div class="testimonial-top-cap">
                        <p>
                          “I am at an age where I just want to be fit and
                          healthy our bodies are our responsibility! So start
                          caring for your body and it will care for you. Eat
                          clean it will care for you and workout hard.”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="count-down-area pt-25 section-bg"
          style={{
            backgroundImage: `url(${require("../../assets/img/gallery/section_bg02.png")})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12 col-md-12">
                <div class="count-down-wrapper">
                  <div class="row justify-content-between">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="single-counter text-center">
                        <span class="counter color-green">6,200</span>
                        <span class="plus">+</span>
                        <p class="color-green">Donation</p>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="single-counter text-center">
                        <span class="counter color-green">80</span>
                        <span class="plus">+</span>
                        <p class="color-green">Fund Raised</p>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="single-counter text-center">
                        <span class="counter color-green">256</span>
                        <span class="plus">+</span>
                        <p class="color-green">Donation</p>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="single-counter text-center">
                        <span class="counter color-green">256</span>
                        <span class="plus">+</span>
                        <p class="color-green">Donation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
