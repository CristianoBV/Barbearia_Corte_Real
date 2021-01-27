import styled, { keyframes } from 'styled-components';

import { darken, shade } from 'polished';

export const Container = styled.div`
  width: 100vw;
  min-height: 80vh;
  padding: 5rem calc((100vw - 1400px) / 2);
  background: #312e38;
  color: var(--color-white);
  justify-content: center;
  align-content: center;
  align-items: center;
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
    transform: translateX(250px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  align-items: unset;
  align-content: center;

  animation: ${appearFromLeft} 1.5s;
`;

export const Heading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 4rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #fff;

  animation: ${appearFromRight} 1.5s;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 390px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 400px;
  max-width: 100%;
  box-shadow: 8px 8px var(--color-primary);
  object-fit: cover;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;

  @media screen and (max-width: 400px) {
    min-width: 310px;
    max-width: 100%;
  }

  &:hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
  text-align: center;
`;

export const ProductTitle = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  color: var(--color-primary);
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: var(--color-gray-dark);
`;

export const ProductButton = styled.button`
  white-space: nowrap;
  display: flex;
  align-items: center;
  padding: 16px 64px;
  color: #686868;
  font-size: 16px;
  outline: none;
  border: none;
  text-decoration: none;
  border-radius: 12px;
  background: #fff;
  transition: 0.2s ease-in-out;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background: ${darken(0.2, '#fff')};
    color: ${shade(2.4, '#686868')};
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
`;
