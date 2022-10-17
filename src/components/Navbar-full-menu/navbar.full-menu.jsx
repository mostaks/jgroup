/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import appData from '../../data/app.json';
import initFullNavbarMenu from '../../common/initFullNavbarMenu';

const NavbarFullMenu = ({ theme }) => {
  React.useEffect(() => {
    initFullNavbarMenu();
  }, []);
  return (
    <>
      <div
        id="navi"
        className={`topnav ${theme ? (theme === 'light' ? 'light' : '') : ''}`}
      >
        <div className="container-fluid">
          <div className="logo">
            <a href="/">
              {theme ? (
                theme === 'light' ? (
                  <img src={appData.darkLogo} alt="logo" />
                ) : (
                  <img src={appData.lightLogo} alt="logo" />
                )
              ) : (
                <img src={appData.lightLogo} alt="logo" />
              )}
            </a>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i />
              <i />
            </span>
            <span className="text" data-splitting>
              <span className="menu-text word">Menu</span>
            </span>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                    <div className="o-hidden">
                      <Link href="/">
                        <a className="link">
                          <span className="nm">01.</span>
                          Home
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href="/about/about-light">
                        <a className="link">
                          <span className="nm">02.</span>
                          About Us
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href="/contact/contact-light">
                        <a className="link">
                          <span className="nm">05.</span>
                          Contact
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <h6>Phone :</h6>
                  <p>0457 777 844</p>
                </div>
                <div className="item">
                  <h6>Address :</h6>
                  <p>117 Great Western Hwy, Blaxland NSW 2750</p>
                </div>
                <div className="item">
                  <h6>Email :</h6>
                  <p>
                    <a href="#0">info@urbaninfrastructure.com.au</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;
