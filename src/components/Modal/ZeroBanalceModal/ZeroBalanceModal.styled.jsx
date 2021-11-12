import styled from "@emotion/styled/macro";
import { Modal } from "react-bootstrap";

export const ZeroBalanceModalContainer = styled.div`
  max-width: 292px;
  display: flex;
  position: absolute;

  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  float: left;
  z-index: 10000;
  &.arrow-top {
    &:after {
      background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
      content: " ";
      position: absolute;
      left: 25%;
      top: -10px;
      border-top: none;
      border-right: 15px solid transparent;
      border-left: 15px solid transparent;
      border-bottom: 15px solid #1d346a;
    }
  }
`;
export const ModalBodyContainer = styled(Modal.Body)`
  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
  border-radius: 30px;
  color: #fff;
  padding: 30px 25px;
  animation: mymove 4s infinite;
  @keyframes mymove {
    50% {
      box-shadow: 10px 10px 30px #1d346a;
    }
  }
`;
export const ModalBodyMainText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 20px;
  text-align: center;
`;
export const ModalBodySecondaryText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin: 0;
  text-align: center;
`;
