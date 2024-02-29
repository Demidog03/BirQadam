import {
  CaseReducer,
  createAction,
  createSelector,
  createSlice,
  PayloadAction,
  SliceCaseReducers
} from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { ActionError, ActionLoading } from '@/shared/lib/types.ts';
import { Company, CompanyState, CreateCompanyPayload } from '@/modules/company/model/company.types.ts';

const initialState: CompanyState = {
  company: null,
  loading: [],
  errors: [],
}

interface Reducers<State> extends SliceCaseReducers<State> {
  setCompany: CaseReducer<State, PayloadAction<Company | null>>
  setCompanyLoading: CaseReducer<State, PayloadAction<ActionLoading>>
  addCompanyError: CaseReducer<State, PayloadAction<ActionError>>
  removeCompanyError: CaseReducer<State, PayloadAction<{ actionType: string }>>
  clearCompanyError: CaseReducer<State, PayloadAction>
}

const companySlice = createSlice<CompanyState, Reducers<CompanyState>>({
  name: 'company',
  initialState,
  reducers: {
    setCompany: (state, action) => {
      state.company = action.payload
    },
    setCompanyLoading: (state, action) => {
      const filteredLoadingStates = [...state.loading].filter(loading => loading.actionType !== action.payload.actionType)
      state.loading = [...filteredLoadingStates, action.payload]
    },
    addCompanyError: (state, action) => {
      const filteredErrors = [...state.errors].filter(error => error.actionType !== action.payload.actionType)
      state.errors = [...filteredErrors, action.payload]
    },
    removeCompanyError: (state, action) => {
      state.errors = [...state.errors.filter(error => error.actionType !== action.payload.actionType)]
    },
    clearCompanyError: (state) => {
      state.errors = []
    },
  }
})

export const createCompanyAction = createAction<CreateCompanyPayload>('company/createCompany')

export const {
  setCompany,
  setCompanyLoading,
  removeCompanyError,
  addCompanyError,
  clearCompanyError,
} = companySlice.actions


export const companySelector = (state: RootState): Company | null => state.company.company
export const companyLoadingSelector = (actionType: string) => createSelector(
  (state: RootState) => state.company.loading.find(loading => loading.actionType === actionType),
  (loading) => loading?.isLoading ?? false
);
export const companyErrorsSelector = (state: RootState): ActionError[] => state.company.errors

export default companySlice.reducer