import React from 'react';
import { Background , Cabbages, MobileTopCabbage, MobileBottomCabbage, Header, HeaderDescr} from './Home.styled';
import Registration from '../Registration/Registration.jsx'

export default function Home() {
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