export interface ProfileState {
  profile: Profile | null
  loading: boolean
}

export interface Profile {
  id: number
  username: string
  firstName: string
  lastName: string
  email: string
}