import { CaseReducer, PayloadAction, SliceCaseReducers, createAction, createSlice } from '@reduxjs/toolkit'
import { inviteEmployeeRequest, inviteEmployeeResponse } from '../api/employees.api.types'

const initialState: inviteEmployeeResponse = {
  id: 0,
  recipient_email: '',
  //token: '',
  invite_type: '',
  team_id: 0,
  company_id: 0,
}


interface Reducers<State> extends SliceCaseReducers<State> {
    inviteEmployee: CaseReducer<State, PayloadAction<inviteEmployeeResponse>>
  }

const employeesInvite = createSlice<inviteEmployeeResponse, Reducers<inviteEmployeeResponse>>({
  name: 'employees',
  initialState,
  reducers: {
    inviteEmployee : (state, action) => {
      state.recipient_email = action.payload.recipient_email
      state.invite_type = action.payload.invite_type
      state.team_id = action.payload.team_id
      state.company_id = action.payload.company_id
    },
  }
})

export const inviteEmployeeAction = createAction<inviteEmployeeRequest>(
  'employee/invite'
);

export const { inviteEmployee } = employeesInvite.actions
  
export const employeesInviteSelector = (state: inviteEmployeeRequest)  => state
  
export default employeesInvite.reducer