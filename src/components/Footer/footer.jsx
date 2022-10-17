/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import appData from '../../data/app.json';

const Footer = ({ hideBGCOLOR }) => (
  <footer className={`${!hideBGCOLOR ? 'sub-bg' : ''}`}>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="item md-mb50">
            <div className="title">
              <h5>Contact Us</h5>
            </div>
            <ul>
              <li>
                <span className="icon pe-7s-map-marker" />
                <div className="cont">
                  <h6>Address</h6>
                  <p>504 White St . Dawsonville, GA 30534 , New York</p>
                </div>
              </li>
              <li>
                <span className="icon pe-7s-mail" />
                <div className="cont">
                  <h6>Email Us</h6>
                  <p>support@gmail.com</p>
                </div>
              </li>
              <li>
                <span className="icon pe-7s-call" />
                <div className="cont">
                  <h6>Call Us</h6>
                  <p>+87986451666</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="item">
            <div className="logo">
              <img src={appData.lightLogo} alt="" />
            </div>
            <div className="social">
              <a href="#0">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#0">
                <i className="fab fa-twitter" />
              </a>
              <a href="#0">
                <i className="fab fa-instagram" />
              </a>
              <a href="#0">
                <i className="fab fa-youtube" />
              </a>
            </div>
            <div className="copy-right">
              <p>
                © 2022, Vie Template. Made with passion by
                <Link href="https://themeforest.net/user/themescamp/portfolio">
                  <a target="_blank">ThemesCamp</a>
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
