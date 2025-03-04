import { ActionError, ActionLoading } from '@/shared/lib/types.ts';

export interface AuthState {
  token: Token | null
  loading: ActionLoading[]
  errors: ActionError[]
  registerStep: 0 | 1
  tempUserId: number | null
}

export interface Token {
  accessToken: string
  refreshToken: string
}

export interface LoginPayload {
  email: string
  password: string
}

export interface RegisterPayload {
  post: string
  dateOfBirth: string
  email: string
  firstName: string
  lastName: string
  password: string
  repeatPassword: string
}

export interface SendCodePayload {
  userId: number
  code: string
}