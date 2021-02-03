import React from 'react';
import NavBar from '../../components/NavBar';

import LogoImg from '../../assets/images/logo.png';

import { Container, Logo, Center } from './styles';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <Container className="page-404 text-center bg-overlay bg-overlay-dark fullscreen pb-0 mtop-100">
      <Logo src={LogoImg} alt="Barbearia Corte Real" />
      <NavBar />
      <Center>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
              <h3>404</h3>
              <div className="clearfix"></div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
              <div className="clearfix"></div>
              <p className="mb-40 text-white">
                Desculpe! A pagina que está tentando acessar, não existe ou não
                está disponivel.
                <br /> Voltar para a pagina principal.
              </p>

              <Button className="btn" type="button">
                <Link to="/"> Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </Center>
    </Container>
  );
};

export default NotFound;
