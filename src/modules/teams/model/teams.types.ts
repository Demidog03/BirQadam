import { Company } from '@/modules/company/model/company.types'

export interface TeamsState {
  teams: Team[]
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