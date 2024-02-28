import {
  CaseReducer,
  createAction,
  createSelector,
  createSlice,
  PayloadAction,
  SliceCaseReducers
} from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { Profile, ProfileState } from '@/modules/profile/model/profile.types.ts';
import { ActionLoading } from '@/shared/lib/types.ts';

const initialState: ProfileState = {
  profile: null,
  loading: []
}

interface Reducers<State> extends SliceCaseReducers<State> {
  setProfile: CaseReducer<State, PayloadAction<Profile>>
  clearProfile: CaseReducer<State, PayloadAction>
  setProfileLoading: CaseReducer<State, PayloadAction<ActionLoading>>
}

const profileSlice = createSlice<ProfileState, Reducers<ProfileState>>({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = { ...action.payload }
    },
    clearProfile: (state) => {
      state.profile = null
    },
    setProfileLoading: (state, action) => {
      const filteredLoadingStates = [...state.loading].filter(loading => loading.actionType !== action.payload.actionType)
      state.loading = [...filteredLoadingStates, action.payload]
    }
  }
})

export const fetchProfile = createAction('profile/fetchProfile')

export const {
  setProfileLoading,
  setProfile,
  clearProfile
} = profileSlice.actions

export const profileSelector = (state: RootState): Profile | null => state.profile.profile
export const profileLoadingSelector = (actionType: string) => createSelector(
  (state: RootState) => state.profile.loading.find(loading => loading.actionType === actionType),
  (loading) => loading?.isLoading ?? false
);

export default profileSlice.reducer