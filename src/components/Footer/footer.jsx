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
                  <p>Po Box 4088, Penrith Plaza NSW 2750</p>
                </div>
              </li>
              <li>
                <span className="icon pe-7s-mail" />
                <div className="cont">
                  <h6>Email Us</h6>
                  <p>reception@jgcorp.com.au</p>
                </div>
              </li>
              <li>
                <span className="icon pe-7s-call" />
                <div className="cont">
                  <h6>Call Us</h6>
                  <p>(02) 47322 877</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
