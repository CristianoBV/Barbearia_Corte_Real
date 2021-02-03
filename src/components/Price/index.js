import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';

import Logo from '../../assets/images/logo.png';
import { price } from '../../services/cardData';

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
  Video,
  IconPlay,
} from './styles';

const Price = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Video>
              <React.Fragment>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="RUXAQw17qQU"
                  onClose={() => setOpen(false)}
                />
                <IconPlay>
                  <FaPlay onClick={() => setOpen(true)} />
                </IconPlay>
              </React.Fragment>
            </Video>
          </div>
          <div className="col-sm">
            <TextCenter>
              <Title>Tabela de valores</Title>
            </TextCenter>
            <Wrapper>
              <TextCenter>
                <img src={Logo} alt="Barbearia Corte Real" />
              </TextCenter>

              <Spacer></Spacer>

              {price.map((item, index) => (
                <Service key={index}>
                  <ServiceC1>{item.title}</ServiceC1>
                  <ServiceC2></ServiceC2>
                  <ServiceC3>{item.price}</ServiceC3>
                </Service>
              ))}
            </Wrapper>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          <div class="col-sm-6">
            <Video>
              <React.Fragment>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="L61p2uyiMSo"
                  onClose={() => setOpen(false)}
                />

                <IconPlay>
                  <FaPlay onClick={() => setOpen(true)} />
                </IconPlay>
              </React.Fragment>
            </Video>
          </div>
          <div class="col-sm-6">
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
      </div> */}
    </Container>
  );
};

export default Price;
