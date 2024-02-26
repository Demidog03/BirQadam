export interface EmployeesState {
  employees: Employee[]
}

export interface Employee {
  full_name: string
  avatarsrc: string
  job_title: string
  isActive: boolean
}
