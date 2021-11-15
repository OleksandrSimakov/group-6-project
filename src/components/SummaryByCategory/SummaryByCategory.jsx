import sprite from '../../images/sprite-categories.svg'
import styles from './SummaryByCategory.module.css'
import { useSelector } from 'react-redux'
import { summaryByCategorySelectors } from '../../redux/reports'
import Loader from 'react-js-loader'

const SummaryByCategory = ({ transactions, onClick }) => {
  const IsLoading = useSelector(summaryByCategorySelectors.getIsLoading)

  function formatNumber(number) {
    return parseFloat(number).toFixed(2)
  }
  return (
    <>
      {IsLoading ? (
        <Loader
          type="spinner-circle"
          bgColor={'#ff751d'}
          color={'#ff751d'}
          size={60}
        />
      ) : (
        <ul className={styles.list}>
          {transactions?.length === 0 ? (
            <li className={styles.noData}>Записи отсутствуют</li>
          ) : (
            transactions?.map((obj) => (
              <li
                key={obj._id}
                className={styles.item}
                onClick={() => onClick(obj._id, transactions)}
              >
                <p className={styles.text}>{formatNumber(obj.total)}</p>
                <div
                  className={
                    obj.isActive ? styles.svg_boxActive : styles.svg_box
                  }
                >
                  <svg
                    width="58"
                    height="58"
                    className={obj.isActive ? styles.iconActive : styles.icon}
                  >
                    <use xlinkHref={`${sprite}#icon-${obj._id}`} />
                  </svg>
                </div>
                <h3 className={styles.title}>{obj._id}</h3>
              </li>
            ))
          )}
        </ul>
      )}
    </>
  )
}

export default SummaryByCategory
