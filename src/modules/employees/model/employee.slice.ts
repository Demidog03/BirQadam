import { CaseReducer, PayloadAction, SliceCaseReducers, createAction, createSlice } from '@reduxjs/toolkit'
import { Employee, EmployeesState } from './employee.types'
import { RootState } from '@/store'
import { data } from '../ui/data/data'
import { inviteEmployeeRequest, inviteEmployeeResponse } from '../api/employees.api.types'


const initialState: EmployeesState = {
  employees: data,
  id: 0,
  recipient_email: '',
  invite_type: '',
  team_id: 0,
  company_id: 0,
}

interface Reducers<State> extends SliceCaseReducers<State> {
  addEmployee: CaseReducer<State, PayloadAction<Employee>>,
  inviteEmployee: CaseReducer<State, PayloadAction<inviteEmployeeResponse>>
  
}


  
const employeesSlice = createSlice<EmployeesState, Reducers<EmployeesState>>({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload)
    },
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

export const fetchEmployee = createAction('employee/fetchEmployees')

export const { addEmployee, inviteEmployee } = employeesSlice.actions
  
export const employeesSelector = (state: RootState): Employee[] | null => state.employees.employees
  
export const employeesInviteSelector = (state: inviteEmployeeRequest)  => state
  
export default employeesSlice.reducer