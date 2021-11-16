import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { authReducer } from './auth'
import { summaryReducer } from './transactions'
import balanceReducers from './balance/balance-reducers'
import transactionsReducer from './transactions/transactions-reducers'
import reportReducer from './report/report-reducers'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
]

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    balance: balanceReducers,
    transactions: transactionsReducer,
    summary: summaryReducer,
    report: reportReducer,
  },
  middleware,
  devTools: true,
})

const persistor = persistStore(store)
export { store, persistor }
