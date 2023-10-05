import React from "react";
import {Container, LogoContainer, LogoText, MenuContainer, MenuItem} from './styles';
import heart from '../../assets/heart.png';
import {RiAccountCircleFill} from 'react-icons/ri';

export function Header() {
    return(
        <Container>
            <LogoContainer>
            <img src={heart} width={50} alt="logo" />
                <LogoText>health Carefull</LogoText>
            </LogoContainer>
            <MenuContainer>
                <MenuItem href="/">Home</MenuItem>
                <MenuItem href="/">User</MenuItem>
                <RiAccountCircleFill color="white" size={40} />
            </MenuContainer>
        </Container>
    );
}
