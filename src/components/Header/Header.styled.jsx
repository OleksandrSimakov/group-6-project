import styled from '@emotion/styled';

export const HeaderSection = styled.header`
display: flex;
justify-content: space-between;
height: 56px;
// background-color: pink;
`;

export const Logo = styled.svg`
width: 90px;
height: 31px;
margin-top: 12px;
margin-bottom: 18px;
margin-left: 19px;
@media screen and (min-width: 768px) {
   margin-top: 12px;
   margin-bottom: 26px;
   margin-left: 13px;
}
`;
