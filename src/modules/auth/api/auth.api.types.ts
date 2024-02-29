export interface RegisterBody {
  job_title: string
  password: string
  password_repeat: string
  first_name: string
  last_name: string
  birth_date: string
  email: string
}

export interface LoginBody {
  email: string
  password: string
}

export interface SendCodeBody {
  code: string
  user_id: number
}

export interface LoginResponse {
  access_token: string
  refresh_token: string
}

export interface RegisterResponse {
  id: number
  job_title: string
  first_name: string
  last_name: string
  birth_date: string
  email: string
}