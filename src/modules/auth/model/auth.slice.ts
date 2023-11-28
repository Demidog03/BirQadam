import { AuthState, LoginPayload, RegisterPayload, Token } from '@/modules/auth/model/auth.types.ts';
import { CaseReducer, createAction, createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { ActionError } from '@/shared/lib/types.ts';

const initialState: AuthState = {
  token: null,
  loading: false,
  errors: []
}

interface Reducers<State> extends SliceCaseReducers<State> {
  authorize: CaseReducer<State, PayloadAction<Token>>
  clearTokens: CaseReducer<State, PayloadAction>
  setAuthLoading: CaseReducer<State, PayloadAction<boolean>>
  addAuthError: CaseReducer<State, PayloadAction<ActionError>>
  removeAuthError: CaseReducer<State, PayloadAction<{ actionType: string }>>
  clearAuthError: CaseReducer<State, PayloadAction>
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
      state.loading = action.payload
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
    }
  }
})

export const login = createAction<LoginPayload>('auth/login')
export const register = createAction<RegisterPayload>('auth/register')
export const fetchLogout = createAction('auth/fetchLogout')

export const {
  authorize,
  clearTokens,
  setAuthLoading,
  removeAuthError,
  addAuthError,
  clearAuthError
} = authSlice.actions

export const tokenSelector = (state: RootState): Token | null => state.auth.token
export const authLoadingSelector = (state: RootState): boolean => state.auth.loading
export const authErrorsSelector = (state: RootState): ActionError[] => state.auth.errors

export default authSlice.reducer