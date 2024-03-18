export interface EmployeesState {
  employees: Employee[]
  recipient_email: string,
  invite_type: string,
  team_id: number,
  company_id: number,
  id: number
}

export interface Employee {
  fullName: string
  avatarSrc: string
  jobTitle: string
  isActive: boolean
}

