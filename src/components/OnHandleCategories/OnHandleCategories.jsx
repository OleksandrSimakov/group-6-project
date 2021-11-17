import React from 'react'
import s from './OnHandleCategories.module.css'
import sprite from '../../images/sprite.svg';



const OnHandleCategories = ({type, onHandleChangeType}) => {
  return (
    <div className={s.container}>
      <button className={s.button} onClick={onHandleChangeType}>
        <svg className={s.img}>
           <use href={sprite + '#arrowLeft-icon'} />
        </svg>
      </button>

      { type === 'income' ? (
        <p className={s.textCategories}>Доходы</p>
      ) : (
        <p className={s.textCategories}>Paсходы</p>
      )}

      <button className={s.button} onClick={onHandleChangeType}>
        <svg className={s.img}>
          <use href={sprite + '#arrowRight-icon'} />
        </svg>
      </button>
    </div>
  );
};
export default OnHandleCategories;