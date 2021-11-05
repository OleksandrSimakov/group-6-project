import React from 'react';
// import { useSelector } from 'react-redux';
import { HeaderSection, Logo} from './Header.styled';
import UserMenu from '../UserMenu/UserMenu';
import {ReactComponent as LogoIcon} from '../../images/logo.svg';
// console.log('logo :>> ', logo);

export default function Header() {
    // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
    return (
        <HeaderSection>
            <Logo>
               <LogoIcon/>
            </Logo>
            <UserMenu/>
        {/* {isLoggedIn && <UserMenu/>} */}

        </HeaderSection>  
    )
}

