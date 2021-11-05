import styled from '@emotion/styled/macro'

export const Form = styled.div`
  position: relative;

  width: 282px;
  height: auto;
  margin: 54px auto 0;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    width: 604px;
    margin: 0;
    margin-bottom: 122px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    width: 1020px;
    margin-bottom: 59px;
  }
`

export const FormContainer = styled.div`
  width: 282px;
  height: 88px;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;

  background-color: #f5f6fb;

  @media (min-width: 768px) {
    display: flex;
    width: 361px;
    height: 44px;
    border-radius: 16px 0 0 16px;
    background-color: #ffffff;
  }

  @media screen and (min-width: 1280px) {
    width: 473px;
  }
`
