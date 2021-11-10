import React from 'react';
import { useState } from "react";
import { Button, Div, H4, Span, Svg } from './CurrentMonth.styled';
import sprite from '../../images/sprite.svg';

const CurrentMonth = () => {
  const [date, setDate] = useState(new Date());

  const changeMonth = (action) => {
    const value = action === "prev" ? -1 : 1;
    setDate((prevDate) => {
      const newDate = new Date(prevDate.getTime());
      const month = newDate.getMonth();
      newDate.setMonth(month + value);
      if (newDate > new Date()) {
        return prevDate;
      }
      return newDate;
    });
  };
  const year = date.getFullYear();
  const month = date.toLocaleDateString("ru", { month: "long" });

  return (
    <div>
      <H4>Текущий период :</H4>
      <Div>
        <Button type="button" onClick={() => changeMonth("prev")}>
          <Svg>
             <use href={sprite + '#arrowLeft-icon'} />
          </Svg>
        </Button>
        <Span>{month} {year}  </Span>
        <Button type="button" onClick={() => changeMonth("next")}>
          <Svg>
             <use href={sprite + '#arrowRight-icon'} />
          </Svg>
        </Button>
      </Div>
    </div>
  );
}

export default CurrentMonth;