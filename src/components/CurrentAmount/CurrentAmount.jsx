import React from 'react';
import s from './CurrentAmount.module.css'

const CurrentAmount = () => {
  const findTotalSum = (key) => {
    switch (key) {
      case 'expense':
        return 500;
      case 'income':
        return 300;
    
      default:
        break;
    }
  }


  return (
    <div className={s.amount}>
      <div className={s.wrapper}>
        <p className={s.title}>Расходы:</p>
        <span className={s.expense}>{`- ${findTotalSum('expense')} грн.`}</span>
      </div>
      <div className={s.separate} />
      <div className={s.wrapper}>
        <p className={s.title}>Доходы:</p>
        <span className={s.income}>{`+ ${findTotalSum('income')} грн.`}</span>
      </div>
    </div>
  );
};
export default CurrentAmount;
