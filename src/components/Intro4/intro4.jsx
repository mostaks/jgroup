import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from '../../config/particle-config';
import particlesBlackConfig from '../../config/pr-s-black';

const Intro4 = ({ sliderRef, blackStar }) => (
  <header ref={sliderRef} className="particles circle-bg valign">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="cont text-center">
            <h1>
              <span className="color-font">Creativity</span>
              {' '}
              is the process of
              having
              <span className="color-font">original ideas</span>
              .
            </h1>
          </div>
        </div>
      </div>
    </div>

    <Particles
      id="particles-js"
      options={blackStar ? particlesBlackConfig : particlesConfig}
    />

    <div className="gradient-circle" />
    <div className="gradient-circle two" />
    <div className="line bottom left" />
  </header>
);

export default Intro4;
