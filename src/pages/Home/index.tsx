import React from 'react';

import About from '../../components/About';
import DownApp from '../../components/DownApp';
import Header from '../../components/Header';
import Price from '../../components/Price';
import { Spacer } from '../../components/Price/styles';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container id="wrapper">
      <Header />
      <About />
      <Price />
      <DownApp />
      <Spacer />
    </Container>
  );
};

export default Home;
