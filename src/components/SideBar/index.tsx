import React from 'react';
import { router } from '../../services/router';
import { FaPhoneVolume } from 'react-icons/fa';
import {
  Container,
  Icon,
  CloseIcon,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarMenu>
        {router.map((item, index) => (
          <SideBarLink to={item.link} key={index}>
            <SideBarLink to="/">{item.title}</SideBarLink>
          </SideBarLink>
        ))}
      </SideBarMenu>
      <SideBtnWrap>
        <SideBarRoute to="/">
          <FaPhoneVolume />
          <div></div>
          Delivery
        </SideBarRoute>
      </SideBtnWrap>
    </Container>
  );
};

export default SideBar;
