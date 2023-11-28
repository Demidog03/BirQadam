import { AxiosPromise } from 'axios'
import { api } from '@/api/api.ts'
import { LoginBody, LoginResponse, RegisterBody, RegisterResponse } from './auth.api.types'

export const registerApi = async (body: RegisterBody): AxiosPromise<RegisterResponse> => {
  return await api.post('/users/register/', body)
}

export const loginApi = async (body: LoginBody): AxiosPromise<LoginResponse> => {
  return await api.post('/users/token/', body)
}