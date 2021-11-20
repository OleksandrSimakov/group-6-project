import styled from '@emotion/styled/macro'

export const TableContainer = styled.div`
  // @media screen and (max-width: 768px) {
  //   display: none;
  // }

  width: 605px;
  height: 344px;
  margin-top: 60px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-thumb:vertical {
    background-color: #ff751d;
    border: 5px solid #f5f6fb;
    -webkit-border-radius: 10px;
  }

  overflow-x: hidden;

  box-shadow: none;
  border-radius: 20px 20px 0 0;
  outline: 2px solid #f5f6fb;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    margin-bottom: 60px;
    margin-top: 122px;
    background: #ffffff;
  }
  @media screen and (min-width: 1280px) {
    width: 760px;
    margin-left: 20px;
    margin-right: 30px;
    margin-top: 0;
  }
`

export const TransactionTable = styled.table`
  width: 605px;

  text-align: center;
  outline: 2px solid #f5f6fb;
  border-radius: 20px 20px 0 0;

  @media screen and (min-width: 1280px) {
    width: 760px;
  }
`
export const Header = styled.thead`
  font-size: 12px;
  line-height: 14px;

  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000000;

  background-color: #f5f6fb;
`
export const ColumnHeader = styled.th`
  height: 40px;
  padding: 5px;
`
export const TableItem = styled.td`
  padding: 5px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: #52555f;
`
export const TableRow = styled.tr`
  &:not(:last-of-type) {
    border-bottom: 2px solid #f5f6fb;
  }
`
export const DeleteIconBtn = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  border-radius: 50%;
  background-color: #f5f6fb;
  cursor: pointer;
  &:hover {
    background-color: #ffdac0;
    transform: scale(1.1);
  }
`
export const AmountValueHigh = styled.span`
  color: #407946;
  font-weight: bold;
`
export const AmountValueLow = styled.span`
  color: #e7192e;
  font-weight: bold;
`
export const ScrollBar = styled.div`
  :-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #f0f2f5;
  }
`
