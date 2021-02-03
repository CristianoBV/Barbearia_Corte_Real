import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPhone,
  FaAddressBook,
  FaMailBulk,
} from 'react-icons/fa';

import LogoImg from '../../assets/logoMobile.png';

import {
  Container,
  Widget,
  WidgetTitle,
  Content,
  Schedule,
  Logo,
  Entry,
  EntryContent,
  EntryTitle,
  EntryMeta,
  Address,
  SocialMenu,
  Copyright,
} from './styles';

const Footer = () => {
  return (
    <>
      <Container id="contact">
        <Widget>
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-4">
                <Content>
                  <Logo src={LogoImg} alt="logo" />
                  <p>
                    Qualidade existe quando "Se atenta aos mínimos detalhes".
                  </p>
                  <Schedule>
                    <ul>
                      <h3>Confira nossos horários.</h3>
                      <li>
                        Segunda - Sabado <span>9hs : 20hs</span>
                      </li>
                      <li>
                        Intervalo <span>12hs : 14hs</span>
                      </li>
                    </ul>
                  </Schedule>
                </Content>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-4">
                <WidgetTitle>
                  <h5>Estilos de corte</h5>
                </WidgetTitle>
                <Content>
                  <Entry>
                    <div>
                      <Link to="/">
                        <img
                          src="https://demo.zytheme.com/hairy/assets/images/blog/thumb/5.jpg"
                          alt="entry"
                        />
                      </Link>
                    </div>
                    <EntryContent>
                      <EntryTitle>
                        <Link to="/">
                          Essential barbering tips you need to know before you
                          start
                        </Link>
                      </EntryTitle>
                      <EntryMeta>
                        <span>Nov 09, 2017</span>
                      </EntryMeta>
                    </EntryContent>
                  </Entry>

                  <Entry>
                    <div>
                      <Link to="/">
                        <img
                          src="https://demo.zytheme.com/hairy/assets/images/blog/thumb/4.jpg"
                          alt="entry"
                        />
                      </Link>
                    </div>
                    <EntryContent>
                      <EntryTitle>
                        <Link to="/">
                          What are the 360 waves? and how you can get them
                        </Link>
                      </EntryTitle>
                      <EntryMeta>
                        <span>Oct 30, 2017</span>
                      </EntryMeta>
                    </EntryContent>
                  </Entry>

                  <Entry>
                    <div>
                      <Link to="/">
                        <img
                          src="https://demo.zytheme.com/hairy/assets/images/blog/thumb/3.jpg"
                          alt="entry"
                        />
                      </Link>
                    </div>
                    <EntryContent>
                      <EntryTitle>
                        <Link to="#">
                          Discover what is the best haircut for your face shape?
                        </Link>
                      </EntryTitle>
                      <EntryMeta>
                        <span>Oct 19, 2017</span>
                      </EntryMeta>
                    </EntryContent>
                  </Entry>
                </Content>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-4">
                <WidgetTitle>
                  <h5>Get In Touch</h5>
                </WidgetTitle>
                <Content>
                  <Address>
                    <ul class="list-unstyled mb-0">
                      <li>
                        <FaAddressBook /> 1220 Petersham town, Wardll St New
                        South Wales Australia PA 6550.
                      </li>
                      <li>
                        <FaPhone /> (04) 491 570 110
                      </li>
                      <li>
                        <FaMailBulk /> contact@zytheme.com
                      </li>
                    </ul>
                    <SocialMenu>
                      <div className="social-menu">
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
                  </Address>
                </Content>
              </div>
            </div>
          </div>
        </Widget>

        <Copyright>
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-6">
                <span>© 2021, Todos os direitos reservados.</span>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-6 text-right">
                <span> BVWEB - Entre em contato.</span>
              </div>
            </div>
          </div>
        </Copyright>
      </Container>
    </>
  );
};

export default Footer;
