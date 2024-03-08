import {
  CaseReducer,
  createAction,
  createSlice,
  PayloadAction,
  SliceCaseReducers
} from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { CreateTeamPayload, Team, TeamsState } from './teams.types';
  
const initialState: TeamsState = {
  teams: [],
}
  
interface Reducers<State> extends SliceCaseReducers<State> {
  setTeam: CaseReducer<State, PayloadAction<Team>>
}
  
const teamsSlice = createSlice<TeamsState, Reducers<TeamsState>>({
  name: 'teams',
  initialState,
  reducers: {
    setTeam: (state, action) => {
      state.teams.push(action.payload)
    }
  }
})

export const teamsSelector = (state: RootState): Team[] => state.teams.teams
  
export const createTeamAction = createAction<CreateTeamPayload>('teams/createTeam')
  
export const { setTeam } = teamsSlice.actions
  
export default teamsSlice.reducer