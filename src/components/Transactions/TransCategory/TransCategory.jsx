import { useState, useEffect } from 'react'
import {
  Button,
  CategoriesList,
  CategoryItem,
  ArrowIcon,
} from './TransCategory.styled'
import { ReactComponent as Arrow } from '../../../images/arrow.svg'

const TransCategory = ({ category, categoryOption, categoryChange }) => {
  const expencesCategories = [
    'Транспорт',
    'Продукты',
    'Здоровье',
    'Алкоголь',
    'Развлечения',
    'Всё для дома',
    'Техника',
    'Коммуналка, связь',
    'Спорт, хобби',
    'Образование',
    'Прочее',
  ]

  const [open, setOpen] = useState(false)
  const [chosenOption, setChosenOption] = useState(categoryOption)
  const [categories, setCategories] = useState([])

  useEffect(() => setCategories(categories), [categories])

  const openCategoriesOnClick = () => setOpen(!open)

  const handleOnClick = (e) => {
    setChosenOption(e.target.textContent)
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

  return (
    <div>
      <Button type="button" onClick={openCategoriesOnClick}>
        Категория товара
        <ArrowIcon>
          <Arrow />
        </ArrowIcon>
        {/* {!chosenOption ? categoryOption : chosenOption} */}
      </Button>

      {open && expencesCategories && (
        <CategoriesList>
          {expencesCategories &&
            expencesCategories.map((item) => (
              <CategoryItem
                key={item}
                /*  className={s.item} */
                onClick={handleOnClick}
                value={chosenOption}
                /* onKeyDown={keyDown} */
                /*  role="none" */
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
