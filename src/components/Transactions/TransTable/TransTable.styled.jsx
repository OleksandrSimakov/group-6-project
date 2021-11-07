import styled from '@emotion/styled/macro'

export const TableContainer = styled.div`
  // @media screen and (max-width: 767px) {
  //   display: none;
  // }

  width: 605px;
  height: 344px;
  margin-top: 60px;
  margin-bottom: 60px;

  box-shadow: none;
  border-radius: 20px 20px 0 0;
  outline: 2px solid #f5f6fb;

  @media screen and (min-width: 1280px) {
    width: 760px;
  }
`

export const TransactionTable = styled.table`
  width: 605px;

  text-align: center;
  outline: 2px solid #f5f6fb;
  border-radius: 20px 20px 0 0;
  overflow: hidden;

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
export const DeleteIconWrapper = styled.div`
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
export const AmountValue = styled.span`
  color: #e7192e;
  font-weight: bold;
`
