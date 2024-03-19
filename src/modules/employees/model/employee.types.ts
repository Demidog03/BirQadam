export interface EmployeesState {
  employees: Employee[]
}

export interface Employee {
  fullName: string
  avatarSrc: string
  jobTitle: string
  isActive: boolean
}

export interface InviteEmployeePayload {
  recipientEmail: string,
  inviteType: string,
  teamId: number,
  companyId: number
}

export interface InviteEmployeeValues extends InviteEmployeePayload{}