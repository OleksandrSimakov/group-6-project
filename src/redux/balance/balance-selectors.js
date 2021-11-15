const balanceCurrent = (state) => state.balance.current
const currentExpenses = (state) => state.balance.currentExpenses
const currentIncomses = (state) => state.balance.currentIncomses

const balanceSelectors = {
  balanceCurrent,
  currentExpenses,
  currentIncomses,
}

export default balanceSelectors
