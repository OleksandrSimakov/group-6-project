import styled from '@emotion/styled';

export const BalanceForm = styled.form`
position: relative;
text-align: center;
background-color: #F5F6FB;
@media screen and (min-width: 768px){
display: flex;
justify-content: center;
align-items: center;
width:369px;
margin: 0 auto;
padding-left: 35px;
}

`
export const BalanceLabel = styled.label`
font-family: Roboto;
font-style: normal;
font-weight: 700;
font-size: 12px;
letter-spacing: 0.02em;
line-height: 1.17;
margin-bottom: 6px;
color: rgba(82, 85, 95, 0.7);

@media screen and (min-width: 768px){
margin-bottom: 0px;
}
`;

export const BalanceInput = styled.input`
display: flex;
width: 125px;
height: 44px;
align-items: center;
justify-content: center;
text-transform: uppercase;
border: 2px solid #ffffff;
background-color: transparent;
border-radius: 22px 0 0 22px;
font-weight: bold;
font-size: 12px;
line-height: 1.17;
letter-spacing: 0.02em;
padding: 12px 20px;
color: #000000;

@media screen and (max-width: 767px){
 border-right:none;
}

@media screen and (min-width: 768px){
border-radius: 16px;
margin-right: 15px;
}
`;

export const BalanceButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
border: 2px solid #FFFFFF;
border-radius: 0px 22px 22px 0px;
width: 125px;
height: 44px;
font-size: 12px;
line-height: 1.17;
font-weight: bold;
letter-spacing: 0.02em;
text-transform: uppercase;
padding: 12px 20px;
color: rgba(82, 85, 95, 0.7);
    &:hover {
    background-color: #FF751D;
    color: #f5f6fb;
    transition: 0.5s linear;
    &:focus {
    background-color: #FF751D;
    color: #f5f6fb;
    transition: 0.5s linear;
    }
}

@media screen and (min-width: 768px){
  border-radius: 16px;
}
`;

export const BalanceWrapper = styled.div`
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;

@media screen and (min-width: 768px){
  margin: 0;
  margin-left: 21px;
  justify-content: space-between
}
`;