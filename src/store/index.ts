import { rootSaga } from './rootSaga';
import createSagaMiddleware from 'redux-saga'
import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import authReducer from '../modules/auth/model/auth.slice.ts'
import profileReducer from '../modules/profile/model/profile.slice.ts'
import sidebarReducer from '../modules/sidebar/model/sidebar.slice.ts'
import employeesReducer from '../modules/employees/model/employee.slice.ts'

const sagaMiddleware = createSagaMiddleware()
const middlewares = new MiddlewareArray(sagaMiddleware)

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
    employees: employeesReducer,
  },
  devTools: true,
  middleware: middlewares
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
export default store
