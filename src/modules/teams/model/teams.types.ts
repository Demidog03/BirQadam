import { Company } from '@/modules/company/model/company.types'
import { ActionLoading } from '@/shared/lib/types'

export interface TeamsState {
  teams: Team[]
  loading: ActionLoading[]
}
  
export interface Team {
  id: number
  name: string
  logo: string
  company: Company
}

export interface CreateTeamPayload {
  name: string;
  logo: string;
}