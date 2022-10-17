import React from 'react';
import works from '../../data/sections/works-all.json';
import tooltipEffect from '../../common/tooltipEffect';

const WorksStyle1 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      tooltipEffect();
    }, 1000);
  }, []);
  return (
    <section className="works section-padding pb-70">
      <h2 style={{ display: 'none' }}>&nbsp;</h2>
      <div className="container">
        <div className="row lg-space">
          {works.map((work) => (
            <div key={work.id} className="col-lg-4 col-md-6">
              <div className="item">
                <div
                  className="img"
                  data-tooltip-tit={work.title}
                  data-tooltip-sub={work.secTex}
                >
                  <img src={work.image} alt={work.secTex} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksStyle1;
