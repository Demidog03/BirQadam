import { apiWithAuthAndErrorMessaging } from '@/api/api.ts';
import { AxiosPromise } from '@/shared/lib/types.ts';
import {
  FetchProfileResponse,
  UpdateProfileBody,
  UpdateProfileResponse
} from '@/modules/profile/api/profile.api.types.ts';

export const fetchProfileApi = async (): AxiosPromise<FetchProfileResponse> => {
  return await apiWithAuthAndErrorMessaging.get('/users/user/')
}

export const updateProfileApi = async (body: UpdateProfileBody): AxiosPromise<UpdateProfileResponse> => {
  return await apiWithAuthAndErrorMessaging.patch('/users/user/', body);
};
