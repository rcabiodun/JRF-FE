import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <div className="header-area">
        <div className="main-header">
          <div className="header-top d-none d-lg-block">
            <div className="container-fluid">
              <div className="col-xl-12">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="header-info-left d-flex">
                    <ul>
                      <li>Phone: +99 (0) 101 0000 888</li>
                      <li>Email: noreply@yourdomain.com</li>
                    </ul>
                    <div className="header-social">
                      <ul>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="header-info-right d-flex align-items-center">
                    <div className="select-this">
                      <form action="#">
                        <div className="select-itms">
                          <select name="select" id="select1">
                            <option value="">English</option>
                            <option value="">Bangla</option>
                            <option value="">Arabic</option>
                            <option value="">Hindi</option>
                          </select>
                        </div>
                      </form>
                    </div>
                    <ul className="contact-now">
                      <li><Link to="/subscribe">Subscribe Now</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2">
                  <div className="logo">
                    <Link to="/">
                      <img src={require("../assets/img/logo/logo.jpeg")} alt="logo" id="logo"/>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10">
                  <div className="menu-wrapper d-flex align-items-center justify-content-end">
                    <div className="main-menu d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/about">About</Link></li>
                          <li><Link to="/causes">Latest Causes</Link></li>
                          <li><Link to="/events">Social Events</Link></li>
                          <li>
                            <Link to="/blog">Blog</Link>
                            <ul className="submenu">
                              <li><Link to="/blog">Blog</Link></li>
                              <li><Link to="/blog/details">Blog Details</Link></li>
                              <li><Link to="/elements">Element</Link></li>
                            </ul>
                          </li>
                          <li><Link to="/contact">Contact</Link></li>
                        </ul>
                      </nav>
                    </div>
                    <div className="header-right-btn d-none d-lg-block ml-20">
                      <Link to="/donate" className="btn header-btn">Donate</Link>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
