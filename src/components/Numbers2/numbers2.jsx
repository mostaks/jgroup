import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Split from '../Split';

const Numbers2 = () => {
  React.useEffect(() => {
    console.clear();
  });
  return (
    <section className="block-sec section-padding">
      <div className="container">
        <div className="number-sec">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="item md-mb50">
                <span className="icon pe-7s-smile" />
                <h3 className="custom-font">
                  &nbsp;
                  <CountUp redraw end={2400} duration="3">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span className="count" ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h3>
                <Split>
                  <p className="wow words chars splitting txt" data-splitting>
                    Happy Clients
                  </p>
                </Split>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item md-mb50">
                <span className="icon pe-7s-portfolio" />
                <h3 className="custom-font">
                  &nbsp;
                  <CountUp redraw end={133} duration="3">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span className="count" ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h3>
                <Split>
                  <p className="wow txt words chars splitting " data-splitting>
                    Compleate Projects
                  </p>
                </Split>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item sm-mb50">
                <span className="icon pe-7s-cloud-download" />
                <h3 className="custom-font">
                  &nbsp;
                  <CountUp redraw end={254} duration="3">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span className="count" ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  k
                </h3>
                <Split>
                  <p className="wow txt words chars splitting" data-splitting>
                    Files Downloaded
                  </p>
                </Split>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item">
                <span className="icon pe-7s-medal" />
                <h3 className="custom-font">
                  &nbsp;
                  <CountUp redraw end={46} duration="3">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span className="count" ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h3>
                <Split>
                  <p className="wow txt words chars splitting" data-splitting>
                    Award Win
                  </p>
                </Split>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers2;
