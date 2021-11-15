import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './OnHandleCategories.module.css'
import sprite from '../../images/sprite.svg';
//import { reportsSelectors, reportsOperations } from '../../../redux/reports'



const OnHandleCategories = ({type, onHandleChangeType}) => {
   const costs = 'true'
  //const costs = useSelector(reportsSelectors.getCosts)
  // const dispatch = useDispatch()

  // const onClick = () => {
  // return 
  //   // if (costs) {
  //   //   dispatch(reportsOperations.getCostsFalse())
  //   // }
  //   // if (!costs) {
  //   //   dispatch(reportsOperations.getCostsTrue())
  //   // } <button className="westInCome__button" onClick={onClick}>
  // };

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