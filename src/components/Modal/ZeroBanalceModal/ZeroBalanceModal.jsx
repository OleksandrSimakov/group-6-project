import { Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import {
  ZeroBalanceModalContainer,
  ModalBodyContainer,
  ModalBodyMainText,
  ModalBodySecondaryText,
} from './ZeroBalanceModal.styled'

export const ZeroBalanceModal = ({ handleClose }) => {
  // const [show, setShow] = useState(true)

  // // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)
  return (
    <ZeroBalanceModalContainer
      className="arrow-top"
      onClick={() => handleClose(false)}
      role="none"
    >
      <Modal.Dialog bsPrefix centered>
        <ModalBodyContainer>
          <ModalBodyMainText>
            Привет! Для начала работы внеси текущий баланс своего счета!
          </ModalBodyMainText>
          <ModalBodySecondaryText>
            Ты не можешь тратить деньги пока их у тебя нет :&#41;
          </ModalBodySecondaryText>
        </ModalBodyContainer>
      </Modal.Dialog>
    </ZeroBalanceModalContainer>
  )
}
