import styled from 'styled-components';

export const Container = styled.footer`
  width: 100vw;
  background-color: #111;

  .row {
    padding-top: 3rem;
  }
`;

export const Intro = styled.div`
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 557px) {
    width: 100vw;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    justify-items: center;
    justify-self: center;
    text-align: center;
  }
`;

export const LogoContent = styled.div``;

export const SocialMenu = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 2rem;
  text-align: center;
  justify-content: center;
  align-items: center;

  .social-menu ul {
    position: relative;
    padding: 0;
    margin: 0;
    display: flex;
  }
  .social-menu ul li {
    list-style: none;
    margin: 0 10px;
  }
  .social-menu ul li a {
    position: relative;
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    text-align: center;
    transition: 0.5s;
    /* transform: translate(0, 0px); */
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.5);
    padding: 0.8rem;
  }
  .social-menu ul li a > svg {
    color: #000000;
    font-size: 25px;
    transition: 0.5s;

    &:hover {
      color: #fff;
      transition: 0.5s;
    }
  }

  .social-menu ul li a:hover {
    transform: rotate(0deg) skew(0deg) translate(0, -10px);
  }
  .social-menu ul li:nth-child(1) a:hover {
    background-color: #3b5999;
  }
  .social-menu ul li:nth-child(2) a:hover {
    background-color: #e4405f;
  }
  .social-menu ul li:nth-child(3) a:hover {
    background-color: #cd201f;
  }
  .social-menu ul li:nth-child(4) a:hover {
    background-color: #cd201f;
  }
  .social-menu ul li:nth-child(5) a:hover {
    background-color: #0077b5;
  }

  @media screen and (max-width: 557px) {
    width: 100%;
    left: -4%;
  }
`;

export const Widget = styled.div`
  margin-left: 6rem;
  h4 {
    display: flex;
    position: relative;
    font-size: clamp(2rem, 8vw, 1.4rem);
  }

  > ul li {
    margin: 10px auto;

    > a {
      text-decoration: none;
      list-style-type: none;
      color: var(--color-primary);
      font-size: clamp(1.8rem, 8vw, 1.6rem);
    }
  }
  @media screen and (max-width: 557px) {
    margin-top: 30px;
    margin-left: 70px;
    display: flex;
    position: relative;

    h4 {
      display: block;
      position: absolute;
      top: -30px;
      font-size: clamp(2rem, 8vw, 1.4rem);
    }

    ul {
      display: flex;
      flex-direction: column;

      li {
        top: 10px;
        margin: 3px auto;

        a {
          text-decoration: none;
          list-style-type: none;
          color: var(--color-primary);
          font-size: clamp(1.8rem, 8vw, 1.6rem);
        }
      }
    }
  }
`;

export const FooterLogo = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  > p {
    font-size: clamp(2rem, 8vw, 1.4rem);
    color: var(--color-primary);
  }
`;

export const FooterContact = styled.div`
  h4 {
    display: flex;
    position: relative;
    font-size: clamp(2rem, 8vw, 1.4rem);
    margin-bottom: 10px;
  }

  ul li {
    margin: 10px auto;

    > span {
      font-size: clamp(1.8rem, 8vw, 1.4rem);
      color: var(--color-primary);
    }

    > span > svg {
      font-size: 16px;
      color: var(--color-border);
      margin-right: 8px;
    }
  }

  @media screen and (max-width: 557px) {
    ul li {
      margin: 10px auto;

      > span {
        font-size: clamp(1.4rem, 8vw, 1.4rem);
        color: var(--color-primary);
      }

      > span > svg {
        font-size: 14px;
        color: var(--color-border);
        margin-right: 8px;
      }
    }
  }
`;

export const Startup = styled.div`
  margin-top: 10px;
  border-top: 0.3px solid var(--color-border);
  display: flex;
  flex: 1;
  justify-content: center;
  text-align: center;

  p {
    font-size: clamp(1.4rem, 8vw, 1.4rem);
    padding-top: 1rem;
  }
`;
