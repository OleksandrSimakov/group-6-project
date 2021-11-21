import React, { useState } from "react";
import {
  TransactionItem,
  DescriptionWrap,
  CategoryDateWrap,
  Description,
  DateItem,
  Category,
  AmountWrap,
  AmountHigh,
  AmountLow,
  DeleteIconBtnWrapper,
} from "./MobTransTable.styled";
import { ReactComponent as DeleteIcon } from "../../../images/delete.svg";
import { format } from "date-fns";
import { AcceptModalComponent } from "../../Modal/AcceptModal/AcceptModalComponent";

const MobTransTableItem = ({
  transaction: { _id, amount, category, description, date, isIncome },
  profit,
  onDelete,
}) => {
  const [show, setShow] = useState(false);
  return (
    <TransactionItem key={_id}>
      <DescriptionWrap>
        <Description>{description}</Description>
        <CategoryDateWrap>
          <DateItem>{format(new Date(date), "dd.MM.yyyy")}</DateItem>
          <Category>{category}</Category>
        </CategoryDateWrap>
      </DescriptionWrap>

      <AmountWrap>
        {isIncome ? (
          <AmountHigh>{`${amount.toFixed(2)} грн.`}</AmountHigh>
        ) : (
          <AmountLow>{`${-amount.toFixed(2)} грн.`}</AmountLow>
        )}
        {/* {action} */}
        <DeleteIconBtnWrapper type="button" onClick={() => setShow(!show)}>
          <DeleteIcon />
        </DeleteIconBtnWrapper>
        <AcceptModalComponent
          show={show}
          setShow={setShow}
          cb={() => onDelete(_id)}
        >
          Вы хотите удалить транзакцию?
        </AcceptModalComponent>
      </AmountWrap>
    </TransactionItem>
  );
};
export default MobTransTableItem;
