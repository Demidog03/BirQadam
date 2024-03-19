import { AxiosPromise } from 'axios';
import { apiWithAuthAndErrorMessaging } from '@/api/api.ts';
import { InviteEmployeeBody, InviteEmployeeResponse } from './employees.api.types';

export const inviteEmployeeApi = async (
  body: InviteEmployeeBody
): AxiosPromise<InviteEmployeeResponse> => {
  return await apiWithAuthAndErrorMessaging.post('/users/invite/', body);
};

