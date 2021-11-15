import axios from "axios";

const updatedExpenses = async (year, month) => {
  const { data } = await axios.get("/api/transactions/getExpenseByMonth");

  const newData = data?.expenseByMonth?.find(
    (report) => report._id.month === month && report._id.year === year
  );

  return newData === undefined ? 0 : newData.total;
};

const updatedIncomes = async (year, month) => {
  const { data } = await axios.get("/api/transactions/getIncomeByMonth");

  const newData = data?.incomeByMonth?.find(
    (report) => report._id.month === month && report._id.year === year
  );

  return newData === undefined ? 0 : newData.total;
};
export async function fetchCurrentExpenses(year, month) {
  const { data } = await axios.get(
    `api/transactions/getExpenseDetail/${year}-${month}`
  );
  // token.set(data.user.token);
  return data.expenseDetail;
}
export async function fetchCurrentIncome(year, month) {
  const { data } = await axios.get(
    `api/transactions/getIncomeDetail/${year}-${month}`
  );
  // token.set(data.user.token);
  return data.incomeDetail;
}

const balanceServices = {
  updatedExpenses,
  updatedIncomes,
};

export default balanceServices;

axios.defaults.baseURL = 'https://kapusta-pro.herokuapp.com/'

export const addTransactionApi = async (transaction) => {
  const { data } = await axios.post('api/transactions/addIncome', transaction)


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

// function addUserTransaction(endpoint, transaction) {
//   return axios.post(endpoint, transaction)
// }

// function deleteTransaction(transactionId) {
//   return axios.delete(`api/transactions/:${transactionId}`)
// }

// export const transactionsApi = { addTransaction, deleteTransaction }

