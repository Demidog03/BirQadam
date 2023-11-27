import { AxiosPromise } from 'axios'
import { api } from '@/api/api.ts'

interface RegisterBody {
  username: string
  password: string
  password_repeat: string
  first_name: string
  last_name: string
  email: string
}

interface LoginBody {
  username: string
  password: string
}

export interface LoginResponse {
  access_token: string
  refresh_token: string
}

interface RegisterResponse {
  access_token: string
  refresh_token: string
}

export const registerApi = async (body: RegisterBody): AxiosPromise<RegisterResponse> => {
  return await api.post('/users/register/', body)
}

export const loginApi = async (body: LoginBody): AxiosPromise<LoginResponse> => {
  return await api.post('/users/token/', body)
}