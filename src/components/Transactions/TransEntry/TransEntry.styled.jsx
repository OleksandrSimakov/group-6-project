import styled from '@emotion/styled/macro'

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  width: 183px;
  height: 44px;
  margin: 0 auto;
  margin-top: 30px;

  border: 2px solid #ffffff;
  border-radius: 22px;

  @media screen and (min-width: 768px) {
    position: relative;
    margin: 0;
    width: 125px;

    border: 2px solid #f6f7fc;
    border-radius: 0 16px 16px 0;
    background-color: #fff;
  }
`

export const Input = styled.input`
  width: 125px;
  height: 40px;
  padding-left: 10px;
  padding-right: 43px;

  text-align: right;

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

  @media screen and (min-width: 768px) {
    width: 100%;
    padding-left: 5px;
    padding-right: 40px;
    background-color: transparent;
  }
`

export const Currency = styled.span`
  position: absolute;
  top: 28%;
  right: 70px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;

  color: #000000;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const CalculatorIcon = styled.div`
  width: 60px;
  height: 40px;
  border-radius: 0 22px 22px 0;

  background-color: #f5f6fb;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    right: -5px;
    background-color: transparent;
  }
`
