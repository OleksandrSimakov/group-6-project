import React from 'react';
import s from './CurrentAmount.module.css'

const CurrentAmount = ({totalIncome, totalExpense}) => {

  return (
    <div className={s.amount}>
      <div className={s.wrapper}>
        <p className={s.title}>Расходы:</p>
        <span className={s.expense}>{`- ${totalExpense} грн.`}</span>
      </div>
      <div className={s.separate} />
      <div className={s.wrapper}>
        <p className={s.title}>Доходы:</p>
        <span className={s.income}>{`+ ${totalIncome} грн.`}</span>
      </div>
    </div>
  );
};
export default CurrentAmount;
