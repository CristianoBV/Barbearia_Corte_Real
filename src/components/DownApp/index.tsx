import React from 'react';
import { FaNewspaper, FaUserEdit } from 'react-icons/fa';
import { GiAlarmClock, GiComb, GiClockwork, GiPadlock } from 'react-icons/gi';

import MobileImg from '../../assets/images/mobile.png';
import FaGooglePlay from '../../assets/images/ui/playstore.svg';
import Button from '../Header/Button';

import {
  Container,
  Feature,
  Row,
  Mobile,
  H2,
  Center,
  RowTitle,
  Icons,
  IconsText,
  Btn,
} from './styles';

const DownApp: React.FC = () => {
  return (
    <Feature>
      <Container>
        <Row>
          <div className="text-center mb-5 mb-lg-0 col-lg-5 order-lg-12">
            <Mobile src={MobileImg} />
          </div>
          <div className="col-lg-7">
            <RowTitle>
              <Center>
                <div className="col-md-10">
                  <H2>Agendamento de horários.</H2>

                  <p>
                    Conheça nosso aplicativo, agende seu horário a hora que
                    quiser, praticidade em suas mãos.
                  </p>
                </div>
              </Center>
            </RowTitle>
            <Row className="mt-5 text-center">
              <div className="col-md-6 mb-5">
                <Icons>
                  <IconsText>
                    <h6>
                      <GiClockwork className="mr-3 fa-2x" />
                      Agende seu horário
                    </h6>
                    <p>Fique por dentro de quais horários estão vagos.</p>
                  </IconsText>
                </Icons>
              </div>
              <div className="col-md-6 mb-5">
                <Icons>
                  <IconsText>
                    <h6>
                      <GiComb className="mr-3 fa-2x" />
                      Barbeiros
                    </h6>
                    <p>
                      Siba quais horários estão vagos de seu barbeiro preferido!
                    </p>
                  </IconsText>
                </Icons>
              </div>
              <div className="col-md-6 mb-5">
                <Icons>
                  <IconsText>
                    <h6>
                      <GiAlarmClock className="mr-3 fa-2x" />
                      Lembrete de horários
                    </h6>
                    <p>
                      Receba notificações de seu horário marcado, para garantir
                      sua pontualidade.
                    </p>
                  </IconsText>
                </Icons>
              </div>
              <div className="col-md-6 mb-5">
                <Icons>
                  <IconsText>
                    <h6>
                      <GiPadlock className="mr-3 fa-2x" />
                      Segurança
                    </h6>
                    <p>
                      Tenha seus dados seguros, se caso esquecer a senha, pode
                      solicitar uma nova rapidinho.
                    </p>
                  </IconsText>
                </Icons>
              </div>
              <div className="col-md-6">
                <Icons>
                  <IconsText>
                    <h6>
                      <FaUserEdit className="mr-3 fa-2x" />
                      Perfil Personalizado.
                    </h6>
                    <p>
                      Altere seu nome, imagem ou senha, tenha um perfil
                      totalmente personalizado.
                    </p>
                  </IconsText>
                </Icons>
              </div>
              <div className="col-md-6">
                <Icons>
                  <IconsText>
                    <h6>
                      <FaNewspaper className="mr-3 fa-2x" />
                      Promoções
                    </h6>
                    <p>
                      Receba notificações de promoções e produdos em tempo real.
                    </p>
                  </IconsText>
                </Icons>
              </div>
            </Row>
          </div>
        </Row>
        <Btn>
          <Button type="submit">
            <img
              src={FaGooglePlay}
              alt="Baixar Aplicativo Barbearia Corte Real"
            />
            Baixar
          </Button>
        </Btn>
      </Container>
    </Feature>
  );
};

export default DownApp;
