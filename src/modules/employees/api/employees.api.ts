import { AxiosPromise } from 'axios';
import { apiWithAuthAndErrorMessaging } from '@/api/api.ts';
import { InviteEmployeeRequest, inviteEmployeeResponse } from './employees.api.types';

export const inviteEmployeeApi = async (
  body: InviteEmployeeRequest
): AxiosPromise<inviteEmployeeResponse> => {
  console.log(body)
  return await apiWithAuthAndErrorMessaging.post('/users/invite/', body);
};

