import React from 'react';
import FaGooglePlay from '../../assets/images/ui/playstore.svg';
import NavBar from '../NavBar';
import Button from './Button';

import LogoImg from '../../assets/images/logo.png';

import { Container, Content, Items, HeaderH1, HeaderP, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Logo src={LogoImg} alt="Barbearia Corte Real" />
        <NavBar />
        <Content>
          <Items>
            <HeaderH1>TESOURA,NAVALHA E CERVEJA</HeaderH1>
            <HeaderP>Agende seu Horário, pelo nosso Aplicativo</HeaderP>
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
