import {
  AuthState,
  CompanyRegisterPayload,
  LoginPayload,
  RegisterPayload,
  SendCodePayload,
  Token
} from '@/modules/auth/model/auth.types.ts';
import {
  CaseReducer,
  createAction,
  createSelector,
  createSlice,
  PayloadAction,
  SliceCaseReducers
} from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { ActionError, ActionLoading } from '@/shared/lib/types.ts';

const initialState: AuthState = {
  token: null,
  loading: [],
  errors: [],
  registerStep: 0,
  tempUserId: null
}

interface Reducers<State> extends SliceCaseReducers<State> {
  authorize: CaseReducer<State, PayloadAction<Token>>
  clearTokens: CaseReducer<State, PayloadAction>
  setAuthLoading: CaseReducer<State, PayloadAction<ActionLoading>>
  addAuthError: CaseReducer<State, PayloadAction<ActionError>>
  removeAuthError: CaseReducer<State, PayloadAction<{ actionType: string }>>
  clearAuthError: CaseReducer<State, PayloadAction>
  setRegisterStep: CaseReducer<State, PayloadAction<0 | 1>>
  setTempUserId: CaseReducer<State, PayloadAction<number | null>>
}

const authSlice = createSlice<AuthState, Reducers<AuthState>>({
  name: 'auth',
  initialState,
  reducers: {
    authorize: (state, action) => {
      state.token = { ...action.payload }
    },
    clearTokens: (state) => {
      state.token = null
    },
    setAuthLoading: (state, action) => {
      const filteredLoadingStates = [...state.loading].filter(loading => loading.actionType !== action.payload.actionType)
      state.loading = [...filteredLoadingStates, action.payload]
    },
    addAuthError: (state, action) => {
      const filteredErrors = [...state.errors].filter(error => error.actionType !== action.payload.actionType)
      state.errors = [...filteredErrors, action.payload]
    },
    removeAuthError: (state, action) => {
      state.errors = [...state.errors.filter(error => error.actionType !== action.payload.actionType)]
    },
    clearAuthError: (state) => {
      state.errors = []
    },
    setRegisterStep: (state, action) => {
      state.registerStep = action.payload
    },
    setTempUserId: (state, action) => {
      state.tempUserId = action.payload
    }
  }
})

export const login = createAction<LoginPayload>('auth/login')
export const register = createAction<RegisterPayload>('auth/register')
export const fetchLogout = createAction('auth/fetchLogout')
export const companyRegister = createAction<CompanyRegisterPayload>('auth/company')
export const sendCode = createAction<SendCodePayload>('auth/sendCode')

export const {
  authorize,
  clearTokens,
  setAuthLoading,
  removeAuthError,
  addAuthError,
  clearAuthError,
  setRegisterStep,
  setTempUserId
} = authSlice.actions

export const tokenSelector = (state: RootState): Token | null => state.auth.token

export const authLoadingSelector = (actionType: string) => createSelector(
  (state: RootState) => state.auth.loading.find(loading => loading.actionType === actionType),
  (loading) => loading?.isLoading ?? false
);

export const authErrorsSelector = (state: RootState): ActionError[] => state.auth.errors
export const authRegisterStepSelector = (state: RootState): 0 | 1 => state.auth.registerStep
export const authTempUserIdSelector = (state: RootState): number | null => state.auth.tempUserId

export default authSlice.reducer