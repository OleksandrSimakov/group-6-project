import { NavLink } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import s from './ReportsButton.module.css';


function ReportsButton() {
  return (
    <div className={s.ReportsButton}>
      <NavLink to='/report' className={s.link}>
        <span className={s.title}>Перейти к отчетам</span>
        <svg className={s.img}>
          <use href={sprite + '#chart-icon'} />
        </svg>
      </NavLink>
    </div>
  );
}

export default ReportsButton;