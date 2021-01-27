import React from 'react';

import About from '../../components/About';
import Header from '../../components/Header';
import Price from '../../components/Price';
import Spacer from '../../components/Spacer';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container id="wrapper">
      <Header />
      <About />
      <Price />
      <Spacer />
    </Container>
  );
};

export default Home;
