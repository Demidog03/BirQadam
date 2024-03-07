import { ActionLoading } from '@/shared/lib/types.ts';
import { Company } from '@/modules/company/model/company.types.ts';

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
  team: {
    id: number
    name: string
    logo: string
  } | null
  company: Company | null
}