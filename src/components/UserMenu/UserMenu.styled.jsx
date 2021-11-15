import styled from '@emotion/styled';

export const UserImg = styled.img`
// margin-right: 4px;
`;

export const UserName = styled.span`
 @media screen and (max-width: 767px) {
    display: none;
  }
color: #52555F;
font-weight: 400;
font-size: 12px;
margin-left: 10px;
`;

export const UserMenuContainer = styled.div`
display: flex;
align-items: center;
padding: 5px 20px;
`;

export const VerticalLine = styled.div`
 @media screen and (max-width: 767px) {
    display: none;
  }
display: block;
width: 1px;
height: 36px;
background-color: #E0E5EB;
margin-right: 20px;
margin-left: 20px;
`

export const ExitButton = styled.button`
 @media screen and (max-width: 767px) {
    display: none;
  }
color: #52555F;
font-size: 12px;
font-weight: 400;
border: none;
background-color: #ffffff;
`;

export const MobileExitButton = styled.button`
 @media screen and (min-width: 768px) {
    display: none;
  }
  display: flex;
  padding: 0;
  border: none;
  margin-left: 15px;
  // fill: #52555F;
  background-color: #ffffff;
`;

