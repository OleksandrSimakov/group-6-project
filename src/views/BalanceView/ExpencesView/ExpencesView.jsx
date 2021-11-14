import { useWindowWidth } from '@react-hook/window-size'
import TransForm from '../../../components/Transactions/TransForm/TransForm'
import TransTable from '../../../components/Transactions/TransTable/TransTable'
import MobTransTable from '../../../components/Transactions/MobileTransTable/MobTransTable'
import { endpoints } from '../../../services/transactions-api'
// import { expencesCategories } from '../../../components/Transactions/TransCategory/TransCategory'

const categoryExpenses = 'Категория товара'

export const expencesCategories = [
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

const ExpenseView = () => {
  const width = useWindowWidth()

  return (
    <div>
      <TransForm
        endpoint={endpoints.addExpense}
        data={expencesCategories}
        categoryTitle={categoryExpenses}
        expense
      />
      {width <= 767 && <MobTransTable />}
      {width >= 768 && <TransTable />}
    </div>
  )
}

export default ExpenseView
