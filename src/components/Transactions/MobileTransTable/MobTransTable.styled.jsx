import styled from '@emotion/styled/macro'

export const TransactionsList = styled.ul`
  padding: 10px 20px;
  height: 150px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb:vertical {
    background-color: #ff751d;
    border: 4px solid #f5f6fb;
    -webkit-border-radius: 10px;
  }

  overflow-x: hidden;
  // @media screen and (min-width: 768px) {
  //   display: none;
  // }
`
export const TransactionItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #f5f6fb;
`
export const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`
export const Description = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  margin: 0;

  color: #52555f;
  max-width: 52.5vw;
  overflow: hidden;
`

export const CategoryDateWrap = styled.div`
  display: flex;
`

export const Category = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 9px;
  line-height: 9px;
  letter-spacing: 0.04em;

  color: #52555f;
`

export const DateItem = styled.span`
  margin-right: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 9px;
  line-height: 9px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #52555f;
`
export const AmountWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const AmountLow = styled.span`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  // text-align: right;
  letter-spacing: 0.04em;

  color: #e7192e;
`

export const AmountHigh = styled.span`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  // text-align: right;
  letter-spacing: 0.04em;

  color: #407946;
`

export const DeleteIconBtnWrapper = styled.button`
  width: 32px;
  height: 32px;
  margin-left: 20px;
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
