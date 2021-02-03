import React from 'react';
import { card } from '../../services/cardData';

import {
  Container,
  Wrapper,
  ProductCard,
  ProductInfo,
  ProductDesc,
  ProductTitle,
  ProductImg,
  Heading,
} from './styles';

const About: React.FC = () => {
  return (
    <Container id="about">
      <Heading>Conheça nosso ambiente</Heading>
      <Wrapper>
        {card.map((item, index) => (
          <ProductCard key={index}>
            <ProductImg src={item.img} alt={item.alt} />
            <ProductInfo>
              <ProductTitle>{item.title}</ProductTitle>
              <ProductDesc>{item.desc}</ProductDesc>
            </ProductInfo>
          </ProductCard>
        ))}
      </Wrapper>
    </Container>
  );
};

export default About;
