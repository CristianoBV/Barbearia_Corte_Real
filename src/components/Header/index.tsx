import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FaGooglePlay from '../../assets/images/ui/playstore.svg';
import NavBar from '../NavBar';
import SideBar from '../SideBar';
import Button from './Button';

import LogoImg from '../../assets/images/logo.png';

import {
  Container,
  Content,
  Items,
  HeaderH1,
  HeaderP,
  Btn,
  Logo,
} from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Logo src={LogoImg} alt="Barbearia Corte Real" />
        <NavBar />
        {/* <SideBar /> */}

        <Content>
          <Items>
            <HeaderH1>TESOURA,NAVALHA E CERVEJA</HeaderH1>
            <HeaderP>Agende seu Horário, pelo nosso Aplicativo</HeaderP>
            {/* <Btn>
              Baixar
              <FaGooglePlay />
            </Btn> */}
            <Button type="submit">
              <img
                src={FaGooglePlay}
                alt="Baixar Aplicativo Barbearia Corte Real"
              />
              Baixar
            </Button>
          </Items>
        </Content>
      </Container>
    </>
  );
};

export default Header;
