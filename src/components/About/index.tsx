import React from 'react';
import CardData from '../../services/cardData.json';

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
    <Container>
      <Heading>Conheça nosso ambiente</Heading>
      <Wrapper>
        {CardData.cardData.map((item, i) => (
          <ProductCard>
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
