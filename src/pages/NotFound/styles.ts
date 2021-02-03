import styled from 'styled-components';

import Banner from '../../assets/images/background/bg-7.jpg';

export const Container = styled.section`
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

export const Center = styled.div`
  top: 15rem;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;
  display: flex;
  position: relative;

  h3 {
    font-size: 200px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 50px;
    padding-top: 100px;
  }

  p {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 50px;
  }

  .btn {
    width: 145px;
    font-size: 22px;
    font-weight: 500;

    > a {
      text-decoration: none;
      color: var(--color-secondary);
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 479px) {
    top: 5rem;
    margin: auto 20px;

    h3 {
      font-size: 120px;
      padding-top: 10px;
    }
    .btn {
      width: 145px;
      font-weight: 500;
    }
    .fullscreen {
      height: auto !important;
    }
  }

  @media only screen and (min-width: 991px) and (max-width: 1200px) {
    top: 20rem;
    display: flex;
    position: relative;
    h3 {
      padding-top: 25px;
    }
  }
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
