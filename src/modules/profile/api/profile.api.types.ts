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