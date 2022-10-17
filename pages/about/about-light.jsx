import React from 'react';
import Navbar from '../../src/components/Navbar/navbar';
import Services from '../../src/components/Services/services';
import VideoWithTestimonials from '../../src/components/Video-with-testimonials/video-with-testimonials';
import SkillsCircle from '../../src/components/Skills-circle/skills-circle';
import Clients from '../../src/components/Clients/clients';
import CallToAction from '../../src/components/Call-to-action/call-to-action';
import Footer from '../../src/components/Footer/footer';
import PagesHeader from '../../src/components/Pages-header';
import AboutIntro from '../../src/components/About-intro';
import LightTheme from '../../src/layouts/Light';
import Team from '../../src/components/Team/team';
import MinimalArea from '../../src/components/Minimal-Area/minimal-area';

const About = () => {
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
      } else {
        navbar.classList.remove('nav-scroll');
      }
    });
  }, [navbarRef]);
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <PagesHeader />
      <AboutIntro />
      <Services style="4item" />
      <VideoWithTestimonials />
      <SkillsCircle from="aboutPage" />
      <Team />
      <MinimalArea />
      <Clients theme="light" />
      <CallToAction />
      <Footer />
    </LightTheme>
  );
};

export default About;
