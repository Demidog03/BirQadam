import { Company } from '@/modules/company/model/company.types.ts';

export interface FetchProfileResponse {
  id: number
  email: string
  first_name: string
  last_name: string
  job_title: string | null
  birth_date: string | null
  team: {
    id: number
    name: string
    logo: string
  } | null
  company: {
    id: number
    name: string
    bin: string
    employee_numbers: number
    logo: string
  } | null
}

export interface UpdateProfileResponse {
  id: number
  email: string
  first_name: string
  last_name: string
  job_title: string | null
  birth_date: string | null
  team: {
    id: number
    name: string
    logo: string
  } | null
  company: Company | null
}

export interface UpdateProfileBody {
  email?: string
  first_name?: string
  last_name?: string
  job_title?: string
  birth_date?: string
}