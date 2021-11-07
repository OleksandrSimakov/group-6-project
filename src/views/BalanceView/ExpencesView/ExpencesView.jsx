import { useWindowWidth } from '@react-hook/window-size'
import TransForm from '../../../components/Transactions/TransForm/TransForm'
import TransTable from '../../../components/Transactions/TransTable/TransTable'
import MobTransTable from '../../../components/Transactions/MobileTransTable/MobTransTable'

const ExpenseView = () => {
  const width = useWindowWidth()

  return (
    <div>
      <TransForm />
      {width <= 767 && <MobTransTable />}
      {width > 768 && <TransTable />}
    </div>
  )
}

export default ExpenseView
