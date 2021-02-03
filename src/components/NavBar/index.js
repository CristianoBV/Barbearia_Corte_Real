import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import Togle from './Toggle';
import Logo from '../../assets/images/logo_header.png';
import { Nav, StyledBurger, Container } from './styles';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const cheangBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', cheangBackground);

  return (
    <Container>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Togle open={open} />
      <Nav
        open={open}
        onClick={() => setOpen(!open)}
        className={navbar ? 'active' : ''}
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#about">Sobre Nós</Link>
          </li>

          <li>
            <img src={Logo} alt="Logo" style={{ marginTop: -15 }} />
          </li>
          <li>
            <Link to="#gallery">Galeria</Link>
          </li>
          <li>
            <Link to="#contact">Contato</Link>
          </li>
        </ul>
      </Nav>
    </Container>
  );
};

export default NavBar;
