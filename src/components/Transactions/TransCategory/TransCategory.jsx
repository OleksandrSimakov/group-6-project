import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  Button,
  CategoriesList,
  CategoryItem,
  ArrowIcon,
} from './TransCategory.styled'
import transactionSelectors from '../../../redux/transactions/transactions-selectors'
import { ReactComponent as ArrowUp } from '../../../images/arrowUp.svg'
import { ReactComponent as ArrowDown } from '../../../images/arrowDown.svg'
import { Category } from '../MobileTransTable/MobTransTable.styled'

const TransCategory = ({ category, categoryType, changeCategory }) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(categoryType)
  const [categories, setCategories] = useState([])

  const clearInput = useSelector(transactionSelectors.getClearedInputValues)

  useEffect(() => setCategories(category), [category])

  const openCategoriesOnClick = () => setOpen(!open)

  const handleCategoriesClick = (e) => {
    setValue(e.target.textContent)
    setOpen(false)
  }

  const handleOutClick = (e) => {
    if (e.target.nodeName === 'BUTTON') return
    if (open && e.target.nodeName !== 'LI') {
      setOpen(false)
    }
  }

  document.body.addEventListener('click', handleOutClick)

  useEffect(
    () => () => document.body.removeEventListener('click', handleOutClick),
    []
  )

  useEffect(() => {
    changeCategory(value)
  }, [value])

  useEffect(() => {
    setValue(categoryType)
  }, [clearInput])

  const keyDown = () => null

  return (
    <div>
      <Button type="button" onClick={openCategoriesOnClick}>
        {value ? value : categoryType}
        <ArrowIcon>
          {value === categoryType ? <ArrowUp /> : <ArrowDown />}
        </ArrowIcon>
      </Button>

      {open && category && (
        <CategoriesList>
          {category &&
            category.map((item) => (
              <CategoryItem
                key={item}
                onClick={handleCategoriesClick}
                value={value}
                onKeyDown={keyDown}
              >
                {item}
              </CategoryItem>
            ))}
        </CategoriesList>
      )}
    </div>
  )
}

export default TransCategory
