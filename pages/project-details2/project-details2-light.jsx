import React from 'react';
import Navbar from '../../src/components/Navbar/navbar';
import Footer from '../../src/components/Footer/footer';
import LightTheme from '../../src/layouts/Light';
import ProjectDetails2Header from '../../src/components/Project-details2-header/project-details2-header';
import ProjectDate from '../../src/data/project-details2.json';
import ProjectIntroduction from '../../src/components/Project-introduction/project-introduction';
import ProjectGallery from '../../src/components/Project-gallery/project-gallery';
import ProjectDescription from '../../src/components/Project-description/project-description';
import ProjectVideo from '../../src/components/Project-video/project-video';
import NextProject from '../../src/components/Next-project/next-project';
import appData from '../../src/data/app.json';

const ProjectDetails2Light = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    const navbar = navbarRef.current;
    const logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add('nav-scroll');
    } else {
      navbar.classList.remove('nav-scroll');
    }
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add('nav-scroll');
        logo.setAttribute('src', appData.darkLogo);
      } else {
        navbar.classList.remove('nav-scroll');
        logo.setAttribute('src', appData.lightLogo);
      }
    });
  }, [navbarRef]);
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="wrapper">
        <ProjectDetails2Header projectHeaderData={ProjectDate} />
        <ProjectIntroduction projectIntroductionData={ProjectDate.intro} />
        <ProjectGallery />
        <ProjectDescription projectDescriptionData={ProjectDate.description} />
        <ProjectVideo projectVideoDate={ProjectDate} />
        <NextProject />
        <Footer />
      </div>
    </LightTheme>
  );
};

export default ProjectDetails2Light;
