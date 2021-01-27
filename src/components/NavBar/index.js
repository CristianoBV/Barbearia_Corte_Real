import React, { useState } from 'react';
import Togle from './Toggle';
import Logo_dark from '../../assets/images/logo.png';

import { Nav, NavLink, NavIcon, Bars, StyledBurger } from './styles';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Togle open={open} />
      <Nav fixedTop={true}>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="services.html">Services</a>
          </li>

          <li className="logo_pos">
            <img
              className="c_logo_light"
              src={Logo_dark}
              alt="Logo"
              style={{ marginTop: -15 }}
            />
          </li>

          <li>
            <a href="about.html">About Us</a>
          </li>

          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </Nav>
    </>
  );
};

export default NavBar;
