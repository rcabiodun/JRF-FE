
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div
        class="footer-wrapper section-bg2"
        style={{
          backgroundImage: `url(${require("../assets/img/gallery/footer_bg.png")})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div class="footer-area footer-padding">
          <div class="container">
            <div class="row d-flex justify-content-between">
              <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div class="single-footer-caption mb-50">
                  <div class="single-footer-caption mb-30">
                    <div class="footer-tittle">
                      <div class="footer-logo mb-20">
                        <Link to="/">
                          <img src={require("../assets/img/logo/logo.jpeg")} alt="" id="logo"/>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div class="single-footer-caption mb-50">
                  <div class="footer-tittle">
                    <h4>Contact Info</h4>
                    <ul>
                      <li>
                        <p>
                          Address :Your address goes here, your demo address.
                        </p>
                      </li>
                      <li>
                        <a href="tel:+8880443388999">Phone: +8880 44338899</a>
                      </li>
                      <li>
                        <a href="mailto:info@yourdomain.com">Email: info@yourdomain.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div class="single-footer-caption mb-50">
                  <div class="footer-tittle">
                    <h4>Important Links</h4>
                    <ul>
                      <li>
                        <Link to="/projects">View Projects</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/testimonials">Testimonials</Link>
                      </li>
                      <li>
                        <Link to="/properties">Properties</Link>
                      </li>
                      <li>
                        <Link to="/support">Support</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div class="single-footer-caption mb-50">
                  <div class="footer-tittle">
                    <h4>Newsletter</h4>
                    <div class="footer-pera footer-pera2">
                      <p>
                        Heaven fruitful doesn't over lesser in days. Appear
                        creeping.
                      </p>
                    </div>
                    <div class="footer-form">
                      <div id="mc_embed_signup">
                        <form
                          target="_blank"
                          action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                          method="get"
                          class="subscribe_form relative mail_part"
                        >
                          <input
                            type="email"
                            name="email"
                            id="newsletter-form-email"
                            placeholder="Email Address"
                            class="placeholder hide-on-focus"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = ' Email Address '"
                          />
                          <div class="form-icon">
                            <button
                              type="submit"
                              name="submit"
                              id="newsletter-submit"
                              class="email_icon newsletter-submit button-contactForm"
                            >
                              <img src="assets/img/gallery/form.png" alt="" />
                            </button>
                          </div>
                          <div class="mt-10 info"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom-area">
          <div class="container">
            <div class="footer-border">
              <div class="row d-flex justify-content-between align-items-center">
                <div class="col-xl-10 col-lg-9">
                  <div class="footer-copy-right">
                    <p>
                      Copyright &copy;{new Date().getFullYear()} All rights reserved | Justice Rights Fund
                    </p>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-3">
                  <div class="footer-social f-right">
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i class="fas fa-globe"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-behance"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
