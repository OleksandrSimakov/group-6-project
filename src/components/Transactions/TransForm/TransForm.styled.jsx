import styled from '@emotion/styled/macro'

export const Form = styled.div`
  position: relative;

  width: 282px;
  height: auto;
  margin: 54px auto 0;

  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: #c7ccdc;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    width: 604px;
    margin: 0 auto;
    // margin-top: 28px;
    // margin-bottom: 122px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1020px;
    // margin-top: 33px;
     margin-bottom: 59px;
  }
`

export const FormContainer = styled.div`
  width: 282px;
  height: 92px;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;

  background-color: #f5f6fb;

  @media (min-width: 768px) {
    display: flex;
    width: 490px;
    height: 44px;
    border-radius: 16px 0 0 16px;
    background-color: #ffffff;
  }

  @media screen and (min-width: 1280px) {
    width: 570px;
  }
`
export const CalendarWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    margin-top: 0px;
    margin-bottom: 0px;}
`
export const CalendarIconWrapper = styled.div`
  display: flex;
  align-item: baseline;
  margin-right: 10px;
`

export const ExampleCustomInput = styled.input`
  border: 0;
  width: 74px;
  height: 40px;

  padding: 0;

  font-weight: 900;
  font-size: 12px;
  line-height: 14px;

  align-items: center;
  letter-spacing: 1.17;
  color: #52555f;
  cursor: pointer;
  caret-color: transparent;
  background-color: transparent;

  :focus,
  :active {
    outline: none;
  }
`
export const DescriptionEntry = styled.input`
  width: 100%;
  height: 44px;

  padding: 16px 107px 16px 20px;

  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #52555f;

  border: 2px solid #ffffff;
  border-bottom: none;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  outline: none;
  background-color: transparent;

  ::placeholder {
    font-size: 12px;
    letter-spacing: 0.02em;
    font-weight: 400;
    color: #808080;
  }

  @media screen and (min-width: 768px) {
    width: 185px;
    height: 45px;
    padding: 2px 16px 2px 16px;
    border: 2px solid #f6f7fc;
    border-radius: 16px 0 0 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 240px;
  }
`
export const Input = styled.input`
  width: 125px;
  height: 40px;
  padding-left: 15px;
  padding-right: 43px;

  text-align: дуае;

  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;

  color: #000000;
  background-color: #f5f6fb;

  border: none;
  outline: none;
  border-right: 2px solid #ffffff;
  border-radius: 22px 0px 0px 22px;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ::placeholder {
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: #000000;
  }

  @media screen and (min-width: 768px) {
    // width: 100%;
    padding-left: 15px;
    padding-right: 40px;
    background-color: transparent;
  }

  // @media screen and (min-width: 1280px) {
  //   position: absolute;
  //   left: 190px;
  // }
`

export const Currency = styled.span`
  width: 26px;
  position: absolute;
  top: 134.5px;
  right: 130px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;

  color: #000000;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const CalculatorIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 40px;
  border-radius: 0 22px 22px 0;

  background-color: #f5f6fb;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    right: 5px;
    background-color: transparent;
    border: none;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 45px;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: -67%;
    right: 10px;
    background-color: transparent;
    border: 2px solid #f6f7fc;
    border-radius: 0 16px 16px 0;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    right: 342px;
  }
`

export const SelectContainer = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    top: -4%;
    right: 135px;
  }

  @media screen and (min-width: 1280px) {
    width: 185px;
    position: absolute;
    left: 368px;
  }
`
export const ActionBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 111px;
  margin-bottom: 170px;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 72px;
    left: 170px;
    margin: 0;
  }

  @media screen and (min-width: 1280px) {
    position: static;
    left: 170px;
    margin-left: 127px;
  }
`
export const ActionButton = styled.button`
  width: 125px;
  height: 44px;

  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;

  border: none;
  background: #f5f6fb;
  color: #52555f;
  box-shadow: 1px 2px 5px rgba(170, 178, 197, 0.4);
  border-radius: 16px;

  cursor: pointer;
  transition: all 250ms cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &:first-of-type {
    margin-right: 15px;
  }

  &:hover,
  &:focus {
    background: #ff751d;
    color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    background: #ffffff;

    border: 2px solid #f6f7fc;
    box-shadow: none;
  }
`
