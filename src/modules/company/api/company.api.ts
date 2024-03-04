import { AxiosPromise } from 'axios'
import { apiWithAuthAndErrorMessaging } from '@/api/api.ts'
import { CreateCompanyBody, CreateCompanyResponse } from '@/modules/company/api/company.api.types.ts';

export const createCompanyApi = async (body: CreateCompanyBody): AxiosPromise<CreateCompanyResponse> => {
  return await apiWithAuthAndErrorMessaging.post('/companies/company/', body)
}
