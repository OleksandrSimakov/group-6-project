import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import {
  AcceptModalContainer,
  AcceptModalBody,
  AcceptModalFooter,
  AcceptModal,
  AcceptModalFooterButton,
  AcceptModalHeader,
} from "./AceptModal.styled";

export const AceptModal = ({ children }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <AcceptModalFooterButton variant="secondary" onClick={handleClose}>
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
