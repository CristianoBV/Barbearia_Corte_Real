import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaHamburger } from 'react-icons/fa';
import { darken, shade } from 'polished';

export const Nav = styled.nav`
  position: relative;
  top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;

  ul {
    display: flex;
    flex-direction: row;
  }

  li {
    margin: 0 30px;
    text-decoration: none;
    list-style: none;

    > a {
      color: #fff;
      font-size: 2.5rem;
      text-decoration: none;
      list-style: none;
      font-family: 'Playfair Display', serif;
      font-weight: 500;
      transition: 0.2s ease-in-out;

      &:hover {
        /* color: ${shade(0.4, '#ff9000')}; */
        box-shadow: 0 2px #ff9000;
      }
    }

    > img {
      width: 15rem;
      display: flex;
      margin: 0 50px;
    }
  }

  @media screen and (max-width: 900px) {
    display: none;

    > a {
      color: #fff;
      font-size: 2.5rem;
      text-decoration: none;
      list-style: none;
      font-family: 'Playfair Display', serif;
      font-weight: 500;
    }

    > img {
      display: block;
      width: 15rem;
      display: flex;
      margin: 0 50px;
    }
  }
`;

export const NavLink = styled(Link)`
  color: var(--color-white);
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  > img {
    display: flex;
    position: relative;
    top: 25px;
    width: 190px;
    object-fit: cover;
  }

  @media screen and (max-width: 900px) {
    position: absolute;
    top: 10px;
    left: 25px;

    > img {
      top: 0;
      width: 80px !important;
    }
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  color: var(--color-white);
  transition: 0.2s ease-in-out;
  cursor: pointer;

  svg:hover {
    color: ${darken(0.4, '#fff')};
    transition: 0.2s ease-in-out;
  }

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaHamburger)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 25px;
  left: -10px;
  float: right;
  z-index: 999999;
  display: none;
  @media (max-width: 900px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: relative;
    /* top: -0.1px; */
    margin-right: 35px;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#fff')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const Btn = styled.div`
  display: flex;
  position: relative;
  float: right;
  top: 0;
  top: -50px;
  padding: 3px 8rem;

  > a {
    color: var(--color-primary);
    font-size: 1.9rem;
    text-decoration: none;
    list-style: none;
    font-family: 'Playfair Display', serif;
    font-weight: 500;
    transition: 0.2s ease-in-out;

    &:hover {
      color: ${darken(0.1, '#ff9000')};
      transition: 0.2s ease-in-out;
    }
  }

  @media screen and (max-width: 1180px) {
    display: none;
  }
`;
