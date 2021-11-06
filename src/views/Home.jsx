import React from 'react';
import { Background , Cabbages, MobileTopCabbage, MobileBottomCabbage, Header, HeaderDescr, BottomCabbage} from '../components/Home/Home.styled'
import Registration from '../components/Registration/Registration'

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
          <BottomCabbage/>
        </>
    )
} 