export interface RegisterBody {
  username: string
  password: string
  password_repeat: string
  first_name: string
  last_name: string
  email: string
}

export interface LoginBody {
  username: string
  password: string
}

export interface LoginResponse {
  access_token: string
  refresh_token: string
}

export interface RegisterResponse {
  access_token: string
  refresh_token: string
}