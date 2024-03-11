export interface CreateTeamBody {
  name: string;
  logo: string;
}
  
export interface TeamResponse {
  id: number;
  name: string;
  logo: string;
  company: {
    id: number;
    name: string;
    bin: string;
    employee_numbers: number;
    logo: string;
  }
}

export interface InviteManagerBody {
  recipient_email: string
  invite_type: string
  team_id: number
  company_id: number
}

export interface InviteResponse {
  id: string
  recipient_email: string
  token: string
  invite_type: string
  team_id: number
  company_id: number
}