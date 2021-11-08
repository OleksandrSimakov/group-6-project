import styled from "@emotion/styled/macro";
import { Modal, Button } from "react-bootstrap";
export const AcceptModalContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const AcceptModal = styled(Modal)`
  .modal-content {
    max-width: 380px;
    background: #ffffff;

    box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
    border-radius: 30px;
  }
`;

export const AcceptModalBody = styled(Modal.Body)`
  padding: 35px;
  display: flex;
  justify-content: center;
  padding: 50px 50px 10px 50px;
`;
export const AcceptModalFooter = styled(Modal.Footer)`
  display: flex;
  justify-content: center;
  border: none;
  margin-bottom: 20px;
`;
export const AcceptModalHeader = styled(Modal.Header)`
  padding: 0;
  border: none;
  margin-right: 20px;
  margin-top: 10px;
`;
export const AcceptModalFooterButton = styled(Button)`
  width: 125px;
  height: 44px;
  color: #52555f;
  border: 2px solid #f5f6fb;
  background: #ffffff;
  border-radius: 16px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  &:hover {
    background: #ff751d;
    border: none;
  }
`;
