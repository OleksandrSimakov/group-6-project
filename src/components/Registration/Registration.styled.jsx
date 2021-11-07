import styled from '@emotion/styled';

export const AccessContainer = styled.div`
  position: absolute;
  top: 255px;
  z-index: 10;
  width: 300px;
  min-height:183px;
  background-color: #ffffff;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  padding: 40px 17px 53px 17px;

  @media screen and (min-width: 768px) {
    width: 436px;
    top: 310px;
  }

  @media screen and (max-width: 1279px) {
   left: 0px;
   right: 0px;
   margin: auto;
  }

  @media screen and (min-width: 1280px) {
      top: 174px;
      right: 110px;
  }
`;

export const Description = styled.p`
color:#52555F;
font-weight: 400;
font-size: 10px;
line-height: 12px;
width: 222px;
margin-left:auto;
margin-right: auto;
margin-bottom: 20px;
text-align: center;
`;

export const Google = styled.div`
display: flex;
justify-content: center;
margin-top: 24px;
margin-bottom: 30px;
`;



