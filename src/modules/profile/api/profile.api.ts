import { apiWithAuthAndErrorMessaging } from '@/api/api.ts';
import { AxiosPromise } from '@/shared/lib/types.ts';
import { FetchProfileResponse } from '@/modules/profile/api/profile.api.types.ts';

export const fetchProfileApi = async (): AxiosPromise<FetchProfileResponse> => {
  return await apiWithAuthAndErrorMessaging.get('/users/profile/')
}