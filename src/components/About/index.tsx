import React from 'react';
import CardData from '../../services/cardData.json';

import Pic_3 from '../../assets/images/misc/pic_3.jpg';
import Pic_4 from '../../assets/images/misc/pic_4.jpg';

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
