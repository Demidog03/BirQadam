import { AuthState, LoginBody, RegisterBody, User } from '@/modules/auth/model/auth.types.ts';
import { CaseReducer, createAction, createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { WithLoading } from '@/shared/lib/types.ts';

const initialState: WithLoading<AuthState> = {
  user: null,
  loading: false
}

interface Reducers<State> extends SliceCaseReducers<State> {
  authorize: CaseReducer<State, PayloadAction<User>>
  logout: CaseReducer<State, PayloadAction>
  setLoading: CaseReducer<State, PayloadAction<boolean>>
}

const authSlice = createSlice<AuthState, Reducers<AuthState>>({
  name: 'auth',
  initialState,
  reducers: {
    authorize: (state, action) => {
      state.user = { ...action.payload }
    },
    logout: (state) => {
      state.user = null
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  }
})

export const login = createAction<LoginBody>('auth/login')
export const register = createAction<RegisterBody>('auth/register')
export const fetchLogout = createAction('auth/fetchLogout')
export const fetchAuthWithToken = createAction<{accessToken: string}>('auth/fetchAuthWithToken')

export const {
  authorize,
  logout,
  setLoading
} = authSlice.actions

export const userSelector = (state: RootState): User | null => state.auth.user
export const isAuthenticatedSelector = (state: RootState): boolean => !!state.auth.user
export const accessTokenSelector = (state: RootState): string | undefined => state.auth.user?.token.accessToken

export default authSlice.reducer