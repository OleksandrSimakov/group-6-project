import React from 'react'
import { Container, Button, Div, H4, Span, Svg } from './CurrentMonth.styled'
import sprite from '../../images/sprite.svg';

const CurrentMonth = ({ month, year, onHandleClickRight, onHandleClickLeft }) => {
  const mounthArr = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const currentMonth = mounthArr[month-1]
  return (
    <Container>
      <H4>Текущий период :</H4>
      <Div>
        <Button type="button" onClick={onHandleClickLeft}>
          <Svg>
            <use href={sprite + '#arrowLeft-icon'} />
          </Svg>
        </Button>
        <Span>{currentMonth} {year}  </Span>
        <Button type="button" onClick={onHandleClickRight}>
          <Svg>
            <use href={sprite + '#arrowRight-icon'} />
          </Svg>
        </Button>
      </Div>
    </Container>
  );
};

export default CurrentMonth;