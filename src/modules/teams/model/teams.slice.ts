import {
  CaseReducer,
  createAction,
  createSelector,
  createSlice,
  PayloadAction,
  SliceCaseReducers
} from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { CreateTeamPayload, Team, TeamsState } from './teams.types';
import { ActionLoading } from '@/shared/lib/types';
  
const initialState: TeamsState = {
  teams: [],
  loading: [],
}
  
interface Reducers<State> extends SliceCaseReducers<State> {
  setTeam: CaseReducer<State, PayloadAction<Team>>
  setTeamsLoading: CaseReducer<State, PayloadAction<ActionLoading>>;
}
  
const teamsSlice = createSlice<TeamsState, Reducers<TeamsState>>({
  name: 'teams',
  initialState,
  reducers: {
    setTeam: (state, action) => {
      state.teams.push(action.payload)
    },
    setTeamsLoading: (state, action) => {
      const filteredLoadingStates = [...state.loading].filter(
        (loading) => loading.actionType !== action.payload.actionType
      );
      state.loading = [...filteredLoadingStates, action.payload];
    },
    setTeams: (state, action) => {
      state.teams = action.payload;
    },
  }
})

export const teamsSelector = (state: RootState): Team[] => state.teams.teams
  
export const createTeamAction = createAction<CreateTeamPayload>('teams/createTeam')
export const fetchTeamsAction = createAction('teams/fetchTeams');
  
export const { setTeam, setTeamsLoading, setTeams } = teamsSlice.actions

export const teamsLoadingSelector = (actionType: string) =>
  createSelector(
    (state: RootState) =>
      state.company.loading.find(
        (loading) => loading.actionType === actionType
      ),
    (loading) => loading?.isLoading ?? false
  );
  
export default teamsSlice.reducer