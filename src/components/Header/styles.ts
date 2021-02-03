import styled, { keyframes } from 'styled-components';
import Banner from '../../assets/images/background/bg-7.jpg';

export const Container = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${Banner});
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 0.1 ease-in-out;
`;

export const Logo = styled.img`
  display: none;
  @media screen and (max-width: 900px) {
    display: initial;
    position: relative;
    width: 90px;
    height: auto;
    max-width: 90px;
    top: 13px;
    margin: 0 17px;
    object-fit: cover;
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div`
  height: calc(90vh - 10px);
  max-height: 100%;
  width: 100vw;
  padding: 0 calc((80vw - 1300px) / 2);

  animation: ${appearFromLeft} 1s;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeaderH1 = styled.h1`
  font-size: clamp(1.8rem, 8vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 2px #ff9000;
  letter-spacing: 3px;
`;

export const HeaderP = styled.p`
  font-size: clamp(2.5rem, 2, 5vw, 3rem);
  margin-bottom: 2rem;
`;
