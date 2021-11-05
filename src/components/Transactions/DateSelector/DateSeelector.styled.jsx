import styled from '@emotion/styled/macro'

export const DateContainer = styled.div``

export const CalendarWrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const CalendarIconWrapper = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-item: baseline;
    margin-right: 10px;
  }
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

export const DateSelectorWrapper = styled.div``
