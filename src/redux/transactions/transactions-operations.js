import axios from 'axios'
import transactionActions from './transactions-actions'

export const expenseOptions = {
  products: 'Продукты',
  alcohol: 'Алкоголь',
  entertainment: 'Развлечения',
  health: 'Здоровье',
  transport: 'Транспорт',
  housing: 'Всё для дома',
  technique: 'Техника',
  utilityCommunication: 'Коммуналка, связь',
  sportsHobbies: 'Спорт, хобби',
  education: 'Образование',
  other: 'Прочее',
}

axios.defaults.baseURL = 'https://kapusta-pro.herokuapp.com/'
// axios.defaults.baseURL = 'http://localhost:3001'

const addIncome =
  (data, onTransactionAddSuccess, onTransactionAddError) =>
  async (dispatch) => {
    dispatch(transactionActions.addIncomeRequest())

    try {
      await axios.post('api/transactions/addIncome', data)
      dispatch(transactionActions.addIncomeSuccess())
      onTransactionAddSuccess()
      // console.log(response)
    } catch (error) {
      onTransactionAddError()
      dispatch(transactionActions.addIncomeError(error.message))
    }

  }

const addExpense =
  (data, onTransactionAddSuccess, onTransactionAddError) =>
  async (dispatch) => {
    dispatch(transactionActions.addExpenseRequest())

    try {
      await axios.post('api/transactions/addExpense', data)
      dispatch(transactionActions.addExpenseSuccess())
      onTransactionAddSuccess()
      // console.log(response)
    } catch (error) {
      onTransactionAddError()
      dispatch(transactionActions.addExpenseError(error.message))
    }
  }

const getExpenseByDate = (date) => async (dispatch) => {
  dispatch(transactionActions.getExpenseByDateRequest())

  try {
    const { data } = await axios.get(
      `api/transactions/getExpenseByDate/${date}`
    )
    dispatch(transactionActions.getExpenseByDateSuccess(data))
  } catch (error) {
    dispatch(transactionActions.getExpenseByDateError())
  }
}

const getIncomeByDate = (date) => async (dispatch) => {
  dispatch(transactionActions.getIncomeByDateRequest())

  try {
    const { data } = await axios.get(`api/transactions/getIncomeByDate/${date}`)
    dispatch(transactionActions.getIncomeByDateSuccess(data))
  } catch (error) {
    dispatch(transactionActions.getIncomeByDateError(error))
  }
}

const deleteTransaction =
  (id, onTransactionRemoveSuccess, onTransactionRemoveError) =>
  async (dispatch) => {
    dispatch(transactionActions.deleteTransactionRequest())

    try {
      const { data } = await axios.delete(`api/transactions/${id}`)

      dispatch(transactionActions.deleteTransactionSuccess(id))
      onTransactionRemoveSuccess()
      console.log(data)
    } catch (error) {
      onTransactionRemoveError(error)

      dispatch(transactionActions.deleteTransactionError(error))
    }
  }

const getLast = (onSuccess, onError) => async (dispatch) => {
  dispatch(transactionActions.getLastRequest())

  try {
    const { data } = await axios.get(`api/transactions/getLast`)
    dispatch(transactionActions.getLastSuccess(data))
  } catch (error) {
    dispatch(transactionActions.getLastError(error))
  }
}

const transactionOperations = {
  addIncome,
  addExpense,
  getExpenseByDate,
  getIncomeByDate,
  getLast,
  deleteTransaction,
}
export default transactionOperations
