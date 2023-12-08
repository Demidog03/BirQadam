import { CaseReducer, createAction, createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { Profile, ProfileState } from '@/modules/profile/model/profile.types.ts';

const initialState: ProfileState = {
  profile: null,
  loading: false
}

interface Reducers<State> extends SliceCaseReducers<State> {
  setProfile: CaseReducer<State, PayloadAction<Profile>>
  clearProfile: CaseReducer<State, PayloadAction>
  setProfileLoading: CaseReducer<State, PayloadAction<boolean>>
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
      state.loading = action.payload
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
export const profileLoadingSelector = (state: RootState): boolean => state.profile.loading

export default profileSlice.reducer