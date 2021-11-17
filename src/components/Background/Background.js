import s from './Background.module.css'

const Background = ({children}) => {

  return (
    <div className={s.container}>
      <div className={`${s.background} ${s.mainTop}`} ></div>
      <div className={`${s.background} ${s.mainBottom}`} ></div>
      {children}
    </div>
  )
}

export default Background