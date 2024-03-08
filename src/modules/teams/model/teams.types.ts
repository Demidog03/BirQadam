export interface TeamsState {
  teams: Team[]
}
  
export interface Team {
  id: number
  name: string
  logo: string
}

export interface CreateTeamPayload {
  name: string;
  logo: string;
}