import React, { useState } from "react";
import {
  TableItem,
  TableRow,
  DeleteIconBtn,
  AmountValueHigh,
  AmountValueLow,
} from "./TransTable.styled";
import { ReactComponent as DeleteIcon } from "../../../images/delete.svg";
import { format } from "date-fns";
import { AcceptModalComponent } from "../../Modal/AcceptModal/AcceptModalComponent";

// import items from './data-mock.json'

const DataTableItem = ({ item, profit, onDelete }) => {
  const [show, setShow] = useState(false);
  return (
    <TableRow key={item._id}>
      <TableItem>{format(new Date(item.date), "dd.MM.yyyy")}</TableItem>
      <TableItem>{item.description}</TableItem>
      <TableItem>{item.category}</TableItem>
      <TableItem>
        {profit ? (
          <AmountValueHigh>{`${item.amount.toFixed(2)} грн.`}</AmountValueHigh>
        ) : (
          <AmountValueLow>{`${-item.amount.toFixed(2)} грн.`}</AmountValueLow>
        )}
      </TableItem>
      <TableItem>
        {item.action}
        <DeleteIconBtn type="button" onClick={() => setShow(!show)}>
          <DeleteIcon />
        </DeleteIconBtn>
      </TableItem>
      <AcceptModalComponent
        show={show}
        setShow={setShow}
        cb={() => onDelete(item._id)}
      >
        Вы хотите удалить транзакцию?
      </AcceptModalComponent>
    </TableRow>
  );
};
export default DataTableItem;
