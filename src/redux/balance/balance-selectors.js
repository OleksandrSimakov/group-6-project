const balanceCurrent = (state) => state.balance.current
const currentExpenses = (state) => state.balance.currentExpenses
const currentIncomses = (state) => state.balance.currentIncomses
const balanceLoading = (state) => state.balance.loading

const balanceSelectors = {
  balanceCurrent,
  currentExpenses,
  currentIncomses,
  balanceLoading,
}

export default balanceSelectors
