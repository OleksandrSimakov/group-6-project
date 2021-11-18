import styled from '@emotion/styled'
import cabbages from '../../images/cabbages.svg'
import halfCabbage from '../../images/m-top-cabbage.svg'
import cabbage from '../../images/m-bottom-cabbage.svg'
import cabbageBot from '../../images/cabbage-bot.svg'
import header from '../../images/kapusta.svg'

export const Background = styled.div`
  background-color: #f5f6fb;
  border-radius: 0 0 0 50px;
  @media screen and (max-width: 767px) {
    height: 286px;
  }

  @media screen and (min-width: 768px) {
    height: 500px;
    padding-top: 28px;
  }
`

export const Cabbages = styled.div`
  @media screen and (min-width: 768px) {
    background-image: url(${cabbages});
    height: 222px;
  }
`
export const PrivateCabbages = styled.div`
  @media screen and (min-width: 1280px) {
    background-image: url(${cabbages});
    height: 222px;
    position: relative;
    top: -100px;
    z-index: -1;
  }
`

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
`

export const BottomCabbage = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    position: relative;
    top: 682px;
    left: 183px;
    z-index: 30;
    background-image: url(${cabbageBot});
    background-repeat: no-repeat;
    height: 89px;
    width: 83px;
  }

  @media screen and (min-width: 1280px) {
    top: 550px;
    left: 340px;
  }
`

export const PrivateBottomCabbage = styled.div`
  position: relative;
  background-image: url(${cabbageBot});
  background-repeat: no-repeat;
  height: 89px;
  width: 83px;
  top: -30px;
  left: 640px;
  z-index: -1;
`
export const MobileBottomCabbage = styled.div`
  position: relative;
  top: 590px;
  left: 117px;
  background-image: url(${cabbage});
  background-repeat: no-repeat;
  height: 89px;
  width: 83px;

  @media screen and (min-width: 768px) {
    top: 620px;
    left: 90px;
  }
  @media screen and (min-width: 1280px) {
    top: 477px;
    left: 230px;
  }
`
export const PrivateMobileBottomCabbage = styled.div`
  position: relative;
  background-image: url(${cabbage});
  background-repeat: no-repeat;
  height: 89px;
  width: 83px;
  top: -100px;
  left: 540px;
  z-index: -1;
`

export const SiteTitle = styled.div`
  position: relative;
  top: 86px;
  left: 49px;
  background-image: url(${header});
  background-repeat: no-repeat;
  height: 46px;
  width: 183px;
  @media screen and (min-width: 768px) {
    top: 90px;
    left: 166px;
    height: 78px;
    width: 307px;
    background-size: contain;
    z-index: 10;
  }
  @media screen and (min-width: 1280px) {
    top: 260px;
    left: 230px;
    height: 120px;
    width: 377px;
  }
`

export const SiteTitleDescr = styled.p`
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
`
