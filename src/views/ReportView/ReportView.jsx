import Balance from '../../components/Balance/Balance'
import WindowDimensions from '../../hooks/useWindowDimensions'
import ChartComponent from '../../components/ChartsComponent/ChartComponent'
import CurrentMonth from '../../components/CurrentMonth/CurrentMonth'
import s from './ReportView.module.css'
import CurrentAmount from '../../components/CurrentAmount/CurrentAmount'
import ArrowGoBack from '../../components/ArrowGoBack/ArrowGoBack'
//import CategoriesList from '../../components/CategoriesList/CategoriesList'


const ReportView = () => {
  const window = WindowDimensions()

  return (
    <div className={s.container}>
      {window.width > 767 ?
        <div className={s.navigation}>
          <ArrowGoBack />
          <Balance />
          <CurrentMonth />
        </div>
        :
        <div className={s.navigation}>
          <ArrowGoBack />
          <CurrentMonth />
          <Balance />
        </div>}
      <div className={s.amoumt}>
        <CurrentAmount />
      </div>
      <ChartComponent />
    </div>
  )
}

export default ReportView