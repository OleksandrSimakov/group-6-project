import styled from '@emotion/styled/macro'

export const BtnWrapper = styled.div`
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
    margin-left: 27px;
  }
`

export const Button = styled.button`
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
