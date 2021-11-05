import React from 'react';
import { Background , Cabbages, MobileTopCabbage, MobileBottomCabbage, Header, HeaderDescr} from './Main.styled';
import Registration from '../Registration/Registration.jsx'

export default function Main() {
    return (
        <>
           <Background>
                <Cabbages>
                  <Header>
                     <HeaderDescr>Smart Finance</HeaderDescr>
                  </Header>
                </Cabbages>
                <MobileTopCabbage />
           </Background>
           <Registration/>
           <MobileBottomCabbage />
        </>
    )
} 