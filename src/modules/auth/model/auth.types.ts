import { ActionError } from '@/shared/lib/types.ts';

export interface AuthState {
  token: Token | null
  loading: boolean
  errors: ActionError[]
}

export interface Token {
  accessToken: string
  refreshToken: string
}

export interface LoginPayload {
  username: string
  password: string
}

export interface RegisterPayload {
  username: string
  email: string
  firstName: string
  lastName: string
  password: string
  repeatPassword: string
}

export interface CompanyRegisterPayload {
  companyName: string
  BIN: string
  numberOfEmployees : number | string
  companyLogo: string
}