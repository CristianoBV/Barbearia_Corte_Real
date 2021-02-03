import styled, { keyframes } from 'styled-components';
import Bg from '../../assets/images/background/price1.png';
import { shade } from 'polished';

export const Container = styled.section`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
    url(${Bg}) top fixed;
  padding: 90px 0 90px 0;
  display: flex;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-250px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-250px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const TextCenter = styled.div`
  text-align: center;

  animation: ${appearFromRight} 1.5s;
`;
export const Title = styled.h1`
  color: var(--color-primary);
  top: 30px;
`;
export const Wrapper = styled.div`
  border: solid 3px rgba(255, 255, 255, 0.1);
  padding: 20px;
  margin-top: 20px;
  padding: 30px;
  animation: ${appearFromLeft} 1.5s;
`;
export const Spacer = styled.div`
  width: 100%;
  height: 30px;
  display: block;
  clear: both;
`;

export const Service = styled.div`
  display: table;
  font-size: 14px;
  width: 100%;
  margin-bottom: 15px;
`;

export const ServiceC1 = styled.div`
  display: table-cell;
  width: auto;
  font-weight: bold;
  color: #fff;
  white-space: nowrap;
  width: 5%;
`;

export const ServiceC2 = styled.div`
  display: table-cell;
  width: auto;
  border-bottom: dashed 1px #aaa;
`;

export const ServiceC3 = styled.div`
  display: table-cell;
  width: auto;
  font-weight: bold;
  text-align: right;
  color: #fff;
  white-space: nowrap;
  width: 5%;
`;

export const Video = styled.div`
  position: relative;
  display: flex;
  z-index: 9999;
  justify-content: start;
  align-items: center;
  top: 20rem;
  width: 30px;

  @media screen and (max-width: 575px) {
    justify-content: center;
    width: 100%;
    top: 0;
    margin-bottom: 4rem;
  }
`;

export const IconPlay = styled.div`
  border: 2px solid var(--color-secondary);
  border-radius: 50%;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  > svg {
    cursor: pointer;
    font-size: 15rem;
    color: var(--color-primary);
    transition: 0.2s ease-in-out;
  }
  &:hover {
    > svg {
      transition: 0.2s ease-in-out;
      color: ${shade(0.4, '#ff9000')};
    }
    transition: 0.2s ease-in-out;
    border: 2px solid var(--color-white);
  }

  @media screen and (max-width: 575px) {
    > svg {
      cursor: pointer;
      font-size: 10rem;
      color: var(--color-primary);
      transition: 0.2s ease-in-out;
    }
    &:hover {
      > svg {
        transition: 0.2s ease-in-out;
        color: ${shade(0.4, '#ff9000')};
      }
      transition: 0.2s ease-in-out;
      border: 2px solid var(--color-white);
    }
  }
`;
