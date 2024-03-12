import { AxiosPromise } from 'axios';
import { apiWithAuthAndErrorMessaging } from '@/api/api.ts';
import { inviteEmployeRequest, inviteEmployeResponse } from './employees.api.types';

export const inviteEmployeApi = async (
  body: inviteEmployeRequest
): AxiosPromise<inviteEmployeResponse> => {
  console.log(body)
  return await apiWithAuthAndErrorMessaging.post('/users/invite/', body);
};

