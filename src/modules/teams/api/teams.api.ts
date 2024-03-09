import { apiWithAuthAndErrorMessaging } from '@/api/api.ts';
import { AxiosPromise } from '@/shared/lib/types.ts';
import { CreateTeamBody, TeamResponse } from './teams.api.types';

export const createTeamApi = async (body: CreateTeamBody): AxiosPromise<TeamResponse> => {
  return await apiWithAuthAndErrorMessaging.post('/teams/team/', body)
}