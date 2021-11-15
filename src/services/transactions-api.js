import axios from 'axios'

const updateUserBalance = async (newBalance) => {
  const response = await axios.patch('/api/auth/balance', {
    balance: newBalance,
  })

  console.log(response)

  return response.data.balance
}

// const fetchBalance = async () => {
//   const { data } = await axios.get('/api/auth/balance')
//   console.log(data)
//   return data.user.balance
// }

const balanceApi = {
  updateUserBalance,
  // fetchBalance,
}

export default balanceApi
