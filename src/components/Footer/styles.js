import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.footer`
  background-color: #252525;
  padding-top: 0;
  padding-bottom: 0;
`;

export const Widget = styled.div`
  padding-top: 110px;
  padding-bottom: 100px;

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    padding-top: 60px;
    padding-bottom: 30px;
  }
`;

export const Content = styled.div`
  p {
    color: #bdbdbd;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 30px;
  }
`;

export const Logo = styled.img`
  margin-bottom: 20px !important;
  margin-left: 6rem;
`;

export const WidgetTitle = styled.div`
  h5 {
    color: var(--color-primary);
    font-size: 18px;
    font-weight: 400;
    line-height: 1;
    text-transform: capitalize;
    margin-bottom: 50px;
  }

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    h5 {
      margin-bottom: 30px;
    }
  }
`;

export const Schedule = styled.div`
  margin-top: 25px;

  h3 {
    color: var(--color-primary);
    font-size: clamp(1.7rem, 8vw, 1.4rem);
    margin-bottom: 1rem;
  }

  ul {
    margin-top: 0;
    margin-bottom: 20px;
  }
  > ul > li {
    color: #bdbdbd;
    font-size: clamp(1.2rem, 8vw, 1.4rem);
    margin: 10px 0;
    list-style-type: none;

    &:last-of-type {
      margin-bottom: 0;
    }

    span {
      color: #fff;
    }
  }
`;

export const Entry = styled.div`
  position: relative;
  margin-bottom: 30px;
  min-height: 70px;

  &:last-of-type {
    margin-bottom: 0;
  }

  > div {
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const EntryContent = styled.div`
  padding-left: 90px;
`;

export const EntryTitle = styled.div`
  margin-bottom: 14px;

  a {
    color: #bdbdbd;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;

    &:hover {
      transition: 0.2s ease-in-out;
      color: ${shade(0.4, '#312E38')};
    }
  }
`;

export const EntryMeta = styled.div`
  color: #888;
  font-family: playfair display, serif;
  font-size: 10px;
  line-height: 1;
`;

export const Address = styled.div`
  ul li {
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    color: #bdbdbd;
    font-family: open sans, sans-serif;
    padding-left: 30px;
    position: relative;
    margin-bottom: 30px;

    > svg {
      position: absolute;
      left: 0;
      top: 7px;
      color: #bb8c4b;
      font-size: 16px;
    }
  }
`;

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
    /* margin: 0 5px; */
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
    background-color: #0077b5;
  }

  @media screen and (max-width: 557px) {
    width: 100%;
    left: -4%;
  }
`;

export const Copyright = styled.div`
  padding: 26px 0;
  color: #888;
  font-family: open sans, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  text-transform: capitalize;
  border-top: 1px solid #303030;

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 12px;
    text-align: center;

    .text-right {
      text-align: center !important;
    }
  }
`;
