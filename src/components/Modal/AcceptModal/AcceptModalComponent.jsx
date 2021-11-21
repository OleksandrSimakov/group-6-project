// import { Button } from 'react-bootstrap'
import React from "react";
import {
  AcceptModalContainer,
  AcceptModalBody,
  AcceptModalFooter,
  AcceptModal,
  AcceptModalFooterButton,
  AcceptModalHeader,
} from "./AcceptModal.styled";

export const AcceptModalComponent = ({ children, show, setShow, cb }) => {
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <AcceptModalContainer closeButton>
      <AcceptModal
        contentClassName={"extra-content"}
        centered
        show={show}
        onHide={handleClose}
      >
        <AcceptModalHeader closeButton></AcceptModalHeader>
        <AcceptModalBody>{children}</AcceptModalBody>
        <AcceptModalFooter>
          <AcceptModalFooterButton variant="secondary" onClick={cb}>
            Да
          </AcceptModalFooterButton>
          <AcceptModalFooterButton variant="primary" onClick={handleClose}>
            Нет
          </AcceptModalFooterButton>
        </AcceptModalFooter>
      </AcceptModal>
    </AcceptModalContainer>
  );
};
