import React, { useState } from 'react';
import Togle from './Toggle';
import Logo from '../../assets/images/logo_header.png';

import { Link } from 'react-router-dom';

import { Nav, StyledBurger, Btn } from './styles';

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
      <Nav>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="services.html">Services</a>
          </li>
          <li>
            <img src={Logo} alt="Logo" style={{ marginTop: -15 }} />
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </Nav>
      <Btn>
        <Link to="/sigin"> Barbeiros</Link>
      </Btn>
    </>
  );
};

export default NavBar;
