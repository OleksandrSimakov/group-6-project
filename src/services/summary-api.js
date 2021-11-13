import axios from 'axios'

const updatedExpenses = async (year, month) => {
  const { data } = await axios.get('/api/transactions/getExpenseByMonth')

  const newData = data?.expenseByMonth?.find(
    (report) => report._id.month === month && report._id.year === year
  )

  return newData === undefined ? 0 : newData.total
}

const updatedIncomes = async (year, month) => {
  const { data } = await axios.get('/api/transactions/getIncomeByMonth')

  const newData = data?.incomeByMonth?.find(
    (report) => report._id.month === month && report._id.year === year
  )

  return newData === undefined ? 0 : newData.total
}

const balanceServices = {
  updatedExpenses,
  updatedIncomes,
}

export default balanceServices
