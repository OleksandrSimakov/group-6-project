import { React, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, useLocation } from 'react-router'

import windowDimensions from '../../hooks/useWindowDimensions'
import sprite from '../../images/sprite.svg'
import s from './ArrowGoBack.module.css'

const ArrowGoBack = () => {
  const window = windowDimensions()
  const history = useHistory()
  const routerState = useRef(null)
  const location = useLocation()

  useEffect(() => {
    if (!routerState.current) {
      routerState.current = location.state
    }
  }, [location.state])

  const handleGoBack = () => {
    const url = routerState.current
      ? `${routerState.current.params}`
      : '/balance'
    history.push(url)
  }

  return (
    <button type="button" className={s.ArrowGoBack} onClick={handleGoBack}>
      <Link className={s.link} to="/balance">
        <svg className={s.img}>
          <use href={sprite + '#arrowBackspace-icon'} />
        </svg>
        <p className={s.title}>
          {window.width > 768 && 'Вернуться на главную'}
        </p>
      </Link>
    </button>
  )
}

export default ArrowGoBack
