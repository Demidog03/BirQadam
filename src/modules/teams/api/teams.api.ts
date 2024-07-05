import { apiWithAuthAndErrorMessaging } from '@/api/api.ts';
import { AxiosPromise } from '@/shared/lib/types.ts';
import { CreateTeamBody, InviteManagerBody, InviteResponse, TeamResponse } from './teams.api.types';

export const createTeamApi = async (body: CreateTeamBody): AxiosPromise<TeamResponse> => {
  return await apiWithAuthAndErrorMessaging.post('/teams/team/', body)
}

export const inviteManagerApi = async (body: InviteManagerBody): AxiosPromise<InviteResponse> => {
  return await apiWithAuthAndErrorMessaging.post('/users/invite/', body)
}

export const fetchTeamsApi = async (): AxiosPromise<TeamResponse[]> => {
  return await apiWithAuthAndErrorMessaging.get('/teams/');
}