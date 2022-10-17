import React from 'react';
import NavbarFullMenu from '../../src/components/Navbar-full-menu/navbar.full-menu';
import ShowcasesFullScreen from '../../src/components/Showcases-full-screen/showcases-full-screen';
import LightTheme from '../../src/layouts/Light';

const ShowcaseLight = () => (
  <LightTheme>
    <NavbarFullMenu theme="light" />
    <ShowcasesFullScreen />
  </LightTheme>
);

export default ShowcaseLight;
