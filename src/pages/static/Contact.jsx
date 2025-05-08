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

function ContactPage() {
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
                                <h2>Contact Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="contact-section">
            <div class="container">
                
                <div class="row">
                    <div class="col-12">
                        <h2 class="contact-title">Get in Touch</h2>
                    </div>
                    <div class="col-lg-8">
                        <form class="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder=" Enter Message"></textarea>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name"/>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email"/>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input class="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject"/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <button type="submit" class="button button-contactForm boxed-btn">Send</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-3 offset-lg-1">
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-home"></i></span>
                            <div class="media-body">
                                <h3>Buttonwood, California.</h3>
                                <p>Rosemead, CA 91770</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                            <div class="media-body">
                                <h3>+1 253 565 2365</h3>
                                <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-email"></i></span>
                            <div class="media-body">
                                {/* <h3>support@colorlib.com</h3> */}
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
