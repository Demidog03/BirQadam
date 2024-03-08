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