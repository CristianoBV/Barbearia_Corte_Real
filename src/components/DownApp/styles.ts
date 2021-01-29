import styled from 'styled-components';

export const Feature = styled.section`
  padding: 8rem 0;

  .col-lg-7 {
    box-shadow: 1px 1px #ff9000;
  }

  @media screen and (max-width: 766px) {
    .col-lg-7 {
      box-shadow: none;
    }
  }
`;
export const Container = styled.section`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -15px;
  -ms-flex-align: center !important;
  align-items: center !important;
`;
export const RowTitle = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -15px;
  -ms-flex-align: center !important;
  align-items: center !important;
  text-align: center !important;
  justify-content: center;
`;

export const Mobile = styled.img`
  max-width: 100% !important;
`;
export const H2 = styled.h2`
  margin: 0 0 1rem;
  color: var(--color-primary);
  font-size: clamp(1.8rem, 8vw, 3rem);
`;

export const Center = styled.div`
  position: relative;
  width: 100%;
  left: 5rem;
  min-height: 1px;
  padding: 0 15px;
  align-items: center;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 766px) {
    left: 10px;
  }
`;

export const Icons = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
`;
export const IconsText = styled.div`
  -ms-flex: 1;
  flex: 1;

  > h6 {
    font-size: clamp(0.5rem, 8vw, 1.6rem) !important;

    > svg {
      color: var(--color-primary);
      font-size: 2rem;
    }
  }
  > p {
    color: var(--color-gray-light);
    font-size: clamp(0.5rem, 8vw, 1.2rem) !important;
  }
`;
export const Btn = styled.div`
  position: relative;
  display: flex;
  top: -10rem;
  width: 100%;
  align-items: center;
  /* justify-content: flex-start; */
  left: 10rem;

  @media (max-width: 992px) {
    top: 2rem;
    /* right: 5rem; */
    justify-content: center;
    left: auto;
  }
`;
