import { Background , Cabbages, MobileTopCabbage, MobileBottomCabbage, Header, HeaderDescr} from './Main.styled';

export default function Main() {
    return (
        <>
           <Background>
                <Cabbages />
                <Header>
                   <HeaderDescr>Smart Finance</HeaderDescr>
                </Header>
                
              <MobileTopCabbage />
           </Background>
            <MobileBottomCabbage />
        </>
    )
} 