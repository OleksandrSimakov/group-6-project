import styled from '@emotion/styled/macro'

export const TransactionsWrapper = styled.div`
  margin: 0 auto;
  max-width: 1060px;
  min-width: 422px;

  @media screen and (min-width: 768px) {
    display: block;
    position: relative;
    margin: 0 auto;
    margin-top: 58px;
    margin-bottom: 61px;
    // width: 665px;
    min-height: 626px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px 30px 30px 30px;

    padding-bottom: 48px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 8px;
    // width: 1060px;
    min-height: 579px;
    padding-bottom: 61px;
  }
`