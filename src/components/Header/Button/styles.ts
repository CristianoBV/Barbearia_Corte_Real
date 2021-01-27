/* eslint-disable arrow-body-style */
import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  color: var(--color-secondary);
  width: 100vw;
  max-width: 35%;
  font-size: clamp(2rem, 2.5vw, 2.4rem);
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0 5px;
  box-shadow: 3px 2px #fff;
  transition: 0.2s ease-in-out;

  @media screen and (max-width: 400px) {
    max-width: 60%;
  }

  img {
    width: 20px;
    margin-right: 10px;
  }

  &:hover {
    transition: 0.2s ease-in-out;
    background: ${shade(0.2, '#ff9000')};
    color: ${shade(0.4, '#312E38')};
    box-shadow: 3px 2px #312e38;
  }
`;
