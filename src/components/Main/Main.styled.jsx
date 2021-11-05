import styled from '@emotion/styled';
import cabbages from '../../images/cabbages.svg';
import halfCabbage from '../../images/m-top-cabbage.svg';
import cabbage from '../../images/m-bottom-cabbage.svg';
import header from '../../images/kapusta.svg'

export const Background = styled.div`
background-color:#F5F6FB;
border-radius: 0 0 0 50px;
@media screen and (max-width: 767px) {
  height: 286px;  
}

@media screen and (min-width: 768px) {
  height: 526px;
  padding-top:28px;
}
`;

export const Cabbages = styled.div`
@media screen and (min-width: 768px) {
  background-image: url(${cabbages});
  height: 232px;
}
`;

export const MobileTopCabbage = styled.div`
@media screen and (max-width: 767px) {
  position: relative;
  top: 60px;
  right: 0px;
  z-index: 10;
  width: 40px;
  margin-left: auto;
  background-image: url(${halfCabbage});
  background-repeat: no-repeat;
  height: 89px;
}
@media screen and (min-width: 768px) {
  display: none;
}
`;

export const MobileBottomCabbage = styled.div`
 position: relative;
 background-image: url(${cabbage});
 background-repeat: no-repeat;
 height: 89px;
 bottom: 0px;
 left: 35px;
 height: 89px;
   
 @media screen and (min-width: 768px) {
   bottom: 90px;
   left: 103px;  
 }
 @media screen and (min-width: 768px) {
   margin-top: 155px;
   bottom: 84px;
   left: 230px;  
 }
`;

export const Header = styled.div`
  position: relative;
  top: 86px;
  left: 49px;
  background-image: url(${header});
  background-repeat: no-repeat;
  height: 46px;
  width: 183px;
  @media screen and (min-width: 768px) {
    top: 90px;
    left: 171px;
    height: 78px;
    width: 307px;
    background-size: contain;
    z-index: 10;
  }
  @media screen and (min-width: 1280px) {
    top: 300px;
    left: 230px;
    height: 120px;
    width: 377px;
  }
`;

export const HeaderDescr = styled.p`
 position: relative;
 text-transform: uppercase;
 top: 49px;
 left: 26px;
 font-weight: 700;
 font-size: 13px;
 line-height: 15px;
 letter-spacing: 15%;
 @media screen and (min-width: 768px) {
    top: 81px;
    left: 60px;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 18%;
}
 @media screen and (min-width: 1280px) {
    top: 100px;
    left: 80px;
}
`;

