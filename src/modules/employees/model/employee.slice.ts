import { CaseReducer, PayloadAction, SliceCaseReducers, createAction, createSlice } from '@reduxjs/toolkit'
import { Employee, EmployeesState, InviteEmployeePayload } from './employee.types'
import { RootState } from '@/store'
import { data } from '../ui/data/data'


const initialState: EmployeesState = {
  employees: data,
}

interface Reducers<State> extends SliceCaseReducers<State> {
  addEmployee: CaseReducer<State, PayloadAction<Employee>>,
}

const employeesSlice = createSlice<EmployeesState, Reducers<EmployeesState>>({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload)
    },
  }
})



export const inviteEmployeeAction = createAction<InviteEmployeePayload>(
  'employee/invite'
);

export const fetchEmployee = createAction('employee/fetchEmployees')

export const { addEmployee  } = employeesSlice.actions

export const employeesSelector = (state: RootState): Employee[] | null => state.employees.employees

export default employeesSlice.reducer
