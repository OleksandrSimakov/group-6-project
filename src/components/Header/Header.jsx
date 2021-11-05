// import { useSelector } from 'react-redux';
import { HeaderSection, Logo } from './Header.styled';
import UserMenu from '../UserMenu/UserMenu';
import logo from '../../images/logo.svg';

export default function Header() {
    // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
    return (
        <HeaderSection>
            <Logo>
                <use href={logo}></use>
            </Logo>
            <UserMenu/>
        {/* {isLoggedIn && <UserMenu/>} */}

        </HeaderSection>  
    )
}

