import { CaseReducer, PayloadAction, SliceCaseReducers, createAction, createSlice } from '@reduxjs/toolkit'
import { inviteEmployeRequest, inviteEmployeResponse } from '../api/employees.api.types'

const initialState: inviteEmployeResponse = {
  id: 0,
  recipient_email: '',
  //token: '',
  invite_type: '',
  team_id: 0,
  company_id: 0,
}


interface Reducers<State> extends SliceCaseReducers<State> {
    inviteEmplouee: CaseReducer<State, PayloadAction<inviteEmployeResponse>>
  }

const employeesInvite = createSlice<inviteEmployeResponse, Reducers<inviteEmployeResponse>>({
  name: 'employees',
  initialState,
  reducers: {
    inviteEmplouee : (state, action) => {
      state.recipient_email = action.payload.recipient_email
      state.invite_type = action.payload.invite_type
      state.team_id = action.payload.team_id
      state.company_id = action.payload.company_id
    },
  }
})

export const inviteEmploueAction = createAction<inviteEmployeRequest>(
  'employee/invite'
);

export const { inviteEmplouee } = employeesInvite.actions
  
export const employeesInviteSelector = (state: inviteEmployeRequest)  => state
  
export default employeesInvite.reducer