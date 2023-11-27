import { AuthState, LoginPayload, RegisterPayload, User } from '@/modules/auth/model/auth.types.ts';
import { CaseReducer, createAction, createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { RootState } from '@/store';

const initialState: AuthState = {
  user: null,
  loading: false
}

interface Reducers<State> extends SliceCaseReducers<State> {
  authorize: CaseReducer<State, PayloadAction<User>>
  logout: CaseReducer<State, PayloadAction>
  setAuthLoading: CaseReducer<State, PayloadAction<boolean>>
}

const authSlice = createSlice<AuthState, Reducers<AuthState>>({
  name: 'auth',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.user = { ...action.payload }
    }
  }
})

export const login = createAction<LoginPayload>('auth/login')
export const register = createAction<RegisterPayload>('auth/register')
export const fetchLogout = createAction('auth/fetchLogout')
export const fetchAuthWithToken = createAction<{accessToken: string}>('auth/fetchAuthWithToken')

export const {
  authorize,
  logout,
  setAuthLoading
} = authSlice.actions

export const userSelector = (state: RootState): User | null => state.auth.user
export const isAuthenticatedSelector = (state: RootState): boolean => !!state.auth.user
export const accessTokenSelector = (state: RootState): string | undefined => state.auth.user?.token.accessToken
export const authLoadingSelector = (state: RootState): boolean => state.auth.loading

export default authSlice.reducer