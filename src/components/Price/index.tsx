import React from 'react';

import Logo from '../../assets/images/logo.png';

import PriceData from '../../services/cardData.json';

import {
  Container,
  Title,
  TextCenter,
  Wrapper,
  Spacer,
  Service,
  ServiceC1,
  ServiceC2,
  ServiceC3,
} from './styles';

const Price: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-6">
            <TextCenter>
              <Title>Tabela de valores</Title>
            </TextCenter>
            <Wrapper>
              <TextCenter>
                <img src={Logo} alt="Barbearia Corte Real" />
              </TextCenter>

              <Spacer></Spacer>

              {PriceData.priceData.map((item, i) => (
                <Service>
                  <ServiceC1>{item.title}</ServiceC1>
                  <ServiceC2></ServiceC2>
                  <ServiceC3>{item.price}</ServiceC3>
                </Service>
              ))}
            </Wrapper>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Price;
