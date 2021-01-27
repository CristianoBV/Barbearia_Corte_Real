import styled from 'styled-components';
import Banner from '../../assets/images/background/bg-7.jpg';
import { darken, shade } from 'polished';

export const Container = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${Banner});
  background-attachment: fixed;
  height: 100vh;
  background-position: center;
  background-size: cover;
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

export const Content = styled.div`
  height: calc(90vh - 80px);
  max-height: 100%;
  width: 100vw;
  padding: 0 calc((80vw - 1300px) / 2);
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

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 1.7rem;
  padding: 1.6rem 4rem;
  border: none;
  border-radius: 12px;
  background: var(--color-login);
  color: var(--color-white);
  transition: 0.2s ease-out;

  > svg {
    width: 18px;
    margin-left: 10px;
  }

  &:hover {
    background: ${darken(0.2, '#f5426c')};
    color: ${shade(1.4, '#fff')};
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
