export interface AuthState {
  user: User | null
  loading: boolean
}

export interface User {
  username: string
  firstName: string
  lastName: string
  email: string
  token: {
    accessToken: string
    refreshToken: string
  }
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