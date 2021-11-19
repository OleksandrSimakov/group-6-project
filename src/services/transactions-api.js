import axios from 'axios'

axios.defaults.baseURL = 'https://kapusta-pro.herokuapp.com/'
// axios.defaults.baseURL = 'http://localhost:3001'

export async function fetchCurrentExpenses(year, month) {
  const { data } = await axios.get(
    `api/transactions/getExpenseDetail/${year}-${month}`
  )
  // token.set(data.user.token);
  return data.expenseDetail
}
export async function fetchCurrentIncome(year, month) {
  const { data } = await axios.get(
    `api/transactions/getIncomeDetail/${year}-${month}`
  )
  // token.set(data.user.token);
  return data.incomeDetail
}

const updateUserBalance = async (newBalance) => {
  const response = await axios.patch('/api/auth/balance', {
    balance: newBalance,
  })

  console.log(response)

  return response.data.user.balance
}

const fetchBalance = async () => {
  const { data } = await axios.get('/api/auth/current')
  console.log(data)
  return data.user.data.balance
}

const balanceServices = {
  fetchBalance,
  updateUserBalance,
  // updatedIncomes,
  // updatedExpenses,
}

export default balanceServices
