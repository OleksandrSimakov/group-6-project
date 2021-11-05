import styled from '@emotion/styled/macro'

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 282px;
  height: 44px;
  padding: 0;
  padding-left: 20px;

  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-align: left;

  border: 2px solid #ffffff;
  border-top: none;
  border-bottom-right-radius: 16px;
  background-color: transparent;

  color: #c7ccdc;

  @media screen and (min-width: 768px) {
    width: 171px;

    border: 2px solid #f5f6fb;
    border-bottom-right-radius: 0;
    border-left: none;
  }

  @media screen and (min-width: 1280px) {
    width: 184px;
    border-right: none;
  }
`

export const ArrowIcon = styled.div`
  margin-left: 10px;
`

export const CategoriesList = styled.button`
  position: relative;
  width: 275px;
  margin: 0 auto;
  background: #ffffff;
  border: 2px solid #f5f6fb;
  box-shadow: 0px 3px 4px rgba(170, 178, 197, 0.4);
  z-index: 99;

  @media screen and (min-width: 768px) {
    width: 171px;
  }

  @media screen and (min-width: 1280px) {
    width: 184px;
  }
`

export const CategoryItem = styled.li`
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 20px;

  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-align: left;
  color: #c7ccdc;
  list-style: none;

  cursor: pointer;

  transition: all 250ms cubic-bezier(0.17, 0.67, 0.83, 0.67);

  :hover,
  :focus {
    font-weight: 700;
    color: #ff751d;
    background: #f5f6fb;
  }
`
