import React from "react";
import { NavLink } from 'react-router-dom';
import windowDimensions from '../../hooks/useWindowDimensions';
import sprite from '../../images/sprite.svg';

import s from './ArrowGoBack.module.css';


const ArrowGoBack = () => {
 
  const window = windowDimensions();

  return (
    <div type="button" className={s.ArrowGoBack}>
      <NavLink className={s.link} to="/balance">
        <svg className={s.img}>
          <use href={sprite + '#arrowBackspace-icon'} />
        </svg>
        <p className={s.title}>
          {window.width > 767 && 'Вернуться на главную'}
        </p>
      </NavLink>
    </div>
  );
};

export default ArrowGoBack;