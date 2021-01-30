import React from 'react';
import { Link } from 'react-router-dom';
import { router } from '../../services/router';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPhone,
  FaAddressBook,
  FaMailBulk,
} from 'react-icons/fa';

import Logo from '../../assets/logoMobile.png';

import {
  Container,
  LogoContent,
  Intro,
  SocialMenu,
  FooterLogo,
  Widget,
  FooterContact,
  Startup,
} from './styles';

const Footer = () => {
  return (
    <Container>
      <div class="container">
        <div class="row">
          <LogoContent className="col">
            <Intro>
              <FooterLogo>
                <Link to="/">
                  <img src={Logo} alt="" />
                </Link>
                <p>Siga nossas redes sociais</p>
                <SocialMenu>
                  <div class="social-menu">
                    <ul>
                      <li>
                        <Link to="/">
                          <FaFacebook />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <FaInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <FaYoutube />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <FaLinkedin />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </SocialMenu>
              </FooterLogo>
            </Intro>
          </LogoContent>

          <div class="col">
            {' '}
            <Widget>
              <h4 className="footer-widget__title">Menu</h4>
              <ul>
                {router.map((item, index) => (
                  <li to={item.link} key={index}>
                    <Link to="/">{item.title}</Link>
                  </li>
                ))}
              </ul>
            </Widget>
          </div>
          <div class="col">
            {' '}
            <FooterContact>
              <h4>Contato</h4>
              <ul>
                <li>
                  <span>
                    <FaAddressBook />
                    Av Cristiano Kraemer, 1926
                  </span>
                </li>
                <li>
                  <span>
                    <FaPhone />
                    51 985553870
                  </span>
                </li>
                <li>
                  <span>
                    <FaMailBulk />
                    cons@email.com
                  </span>
                </li>
              </ul>
            </FooterContact>
          </div>
        </div>
      </div>

      <Startup>
        <p>Copyright © 2019. All right reserved</p>
      </Startup>
      <button className="scroll-top" id="scroll-top">
        <i className="ion-android-arrow-up" />
      </button>
    </Container>
  );
};

export default Footer;
