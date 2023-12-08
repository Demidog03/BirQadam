import { CaseReducer, createAction, createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { SidebarState } from '@/modules/sidebar/model/sidebar.types.ts';

const initialState: SidebarState = {
  width: null,
}

interface Reducers<State> extends SliceCaseReducers<State> {
  setSidebarWidth: CaseReducer<State, PayloadAction<number>>
}

const sidebarSlice = createSlice<SidebarState, Reducers<SidebarState>>({
  name: 'sidebar',
  initialState,
  reducers: {
    setSidebarWidth: (state, action) => {
      state.width = action.payload
    }
  }
})

export const fetchProfile = createAction('profile/fetchProfile')

export const {
  setSidebarWidth
} = sidebarSlice.actions

export const sidebarSelector = (state: RootState): SidebarState | null => state.sidebar

export default sidebarSlice.reducer