import styled from '@emotion/styled';


export const Container = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 175px;

`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  border: 1px solid transparent;
  background: none;
`;
export const Svg = styled.svg`
  fill: #ff751d;
  width: 14px;
  height: 14px;
`;

export const H4 = styled.h4`
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.04em;
  color: rgba(82, 85, 95, 0.7);
`;
export const Span = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000000;
`;