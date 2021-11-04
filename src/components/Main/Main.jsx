import { Background , Cabbages, MobileTopCabbage, MobileBottomCabbage, Header, HederDescr} from './Main.styled';

export default function Main() {
    return (
        <>
           <Background>
                <Cabbages />
                <Header />
                <HederDescr>Smart Finance</HederDescr>
              <MobileTopCabbage />
           </Background>
            <MobileBottomCabbage />
        </>
    )
} 