import styled from '@emotion/styled/macro'

export const DescriptionEntry = styled.input`
  width: 100%;
  height: 44px;

  padding: 16px 107px 16px 20px;

  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #52555f;

  border: 2px solid #ffffff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  outline: none;
  background-color: transparent;

  ::placeholder {
    font-weight: 400;
    color: #c7ccdc;
  }

  @media screen and (min-width: 768px) {
    width: 192px;
    height: 44px;
    padding: 16px 65px 16px 20px;
    border: 2px solid #f6f7fc;
    border-radius: 16px 0 0 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 287px;
  }
`
