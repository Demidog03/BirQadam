export interface AuthState {
  user: User | null
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

export interface LoginBody {
  username: string
  password: string
}

export interface RegisterBody {
  username: string
  email: string
  firstName: string
  lastName: string
  password: string
  repeatPassword: string
}