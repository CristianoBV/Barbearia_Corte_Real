import styled, { keyframes } from 'styled-components';
import Bg from '../../assets/images/background/price1.png';

export const Container = styled.section`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
    url(${Bg}) top fixed;
  /* background: url(${Bg}) top fixed; */
  padding: 90px 0 90px 0;
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
export const TextCenter = styled.h1`
  text-align: center;

  animation: ${appearFromRight} 1.5s;
`;
export const Title = styled.h1`
  color: var(--color-primary);
  top: 30px;
`;
export const Wrapper = styled.h1`
  border: solid 3px rgba(255, 255, 255, 0.1);
  padding: 20px;
  margin-top: 20px;
  padding: 30px;
  animation: ${appearFromLeft} 1.5s;
`;
export const Spacer = styled.h1`
  width: 100%;
  height: 30px;
  display: block;
  clear: both;
`;

export const Service = styled.h1`
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

// .sub-item-service .c1{
//   font-weight:bold;
//   color:#222;
//  }

// .sub-item-service .c3{
// 	font-weight:bold;
// 	text-align:right;
// 	color:#333;
//  }

// .sub-item-service .c1,.c3{
//   white-space: nowrap;
//   width:5%;
// }

// .sub-item-service .c2{
//   border-bottom:dashed 1px #aaa;
// }
