import { ActionLoading } from '@/shared/lib/types.ts';

export interface ProfileState {
  profile: Profile | null
  loading: ActionLoading[]
}

export interface Profile {
  id: number
  email: string
  firstName: string
  lastName: string
  jobTitle: string | null
  birthDate: string | null
  company: Company | null
}

export interface Company {
  id: number
  name: string
  bin: string
  employee_numbers: number | null
}