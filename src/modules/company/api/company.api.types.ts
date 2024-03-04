export interface CreateCompanyBody {
  name: string
  bin: string
  employee_numbers: number
  logo: string
}

export interface CreateCompanyResponse {
  id: number
  name: string
  bin: string
  employee_numbers: number
  logo: string
}