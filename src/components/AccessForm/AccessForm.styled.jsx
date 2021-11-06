import styled from '@emotion/styled';

export const AccessForm = styled.form`
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
`;

export const FormBottons = styled.div`
display: flex;
justify-content: space-between;
`;

export const AccessFormBotton = styled.button`
width: 125px;
height:44px;
padding: 12px 15px;
border-radius: 16px;
border: none;
background-color: #F5F6FB;
text-transform: uppercase;
font-weight: 700;
font-size: 12px;
line-height: 14px;
 &:hover,
 &:focus {
   background-color: #FF751D;
   color: #ffffff;
   outline: #FF751D;
  }
`;


