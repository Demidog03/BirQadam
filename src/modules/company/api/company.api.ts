import { AxiosPromise } from 'axios';
import { apiWithAuthAndErrorMessaging } from '@/api/api.ts';
import {
  CreateCompanyBody,
  CreateCompanyResponse,
  updateCompanyBody,
} from '@/modules/company/api/company.api.types.ts';

export const createCompanyApi = async (
  body: CreateCompanyBody
): AxiosPromise<CreateCompanyResponse> => {
  return await apiWithAuthAndErrorMessaging.post('/companies/company/', body);
};

export const updateCompanyApi = async (
  body: updateCompanyBody
): AxiosPromise<CreateCompanyResponse> => {
  return await apiWithAuthAndErrorMessaging.patch(
    `/companies/company/${body.id}/update/`,
    body
  );
};
