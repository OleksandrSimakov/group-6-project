import styled from '@emotion/styled'

export const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 26px;
    padding-right: 26px;
  }
`

export const Logo = styled.svg`
  width: 90px;
  height: 31px;
  margin-top: 12px;
  margin-bottom: 18px;
  margin-left: 19px;
  @media screen and (min-width: 768px) {
    margin-top: 12px;
    margin-bottom: 26px;
    margin-left: 13px;
  }
`
