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
  height: 286px;
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
  z-index: 200;
  width: 40px;
  margin-left: auto;
  background-image: url(${halfCabbage});
  background-repeat: no-repeat;
  height: 89px;

}
`;

export const MobileBottomCabbage = styled.div`
@media screen and (max-width: 767px) {
  position: relative;
  bottom: 0px;
  left: 35px;
  background-image: url(${cabbage});
  background-repeat: no-repeat;
  height: 89px;
}
`;

export const Header = styled.div`
@media screen and (max-width: 767px) {
  position: relative;
  top: 86px;
  left: 49px;
  background-image: url(${header});
  background-repeat: no-repeat;
  height: 46px;
}
`;

export const HeaderDescr = styled.p`
@media screen and (max-width: 767px) {
position: relative;
top: 49px;
left: 26px;
text-transform: uppercase;
font-weight: 700;
font-size: 13px;
line-height: 15px;
letter-spacing: 15%;
}
`;

