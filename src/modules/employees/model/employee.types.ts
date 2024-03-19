export interface EmployeesState {
  employees: Employee[]
}

export interface Employee {
  fullName: string
  avatarSrc: string
  jobTitle: string
  isActive: boolean
}

