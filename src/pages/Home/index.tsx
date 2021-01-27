import React from 'react';

import About from '../../components/About';
import Header from '../../components/Header';
import Price from '../../components/Price';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container id="wrapper">
      <Header />
      <About />
      <Price />
    </Container>
  );
};

export default Home;
