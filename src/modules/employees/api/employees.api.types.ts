
export interface inviteEmployeRequest {
    recipient_email: string,
    invite_type: string,
    team_id: number,
    company_id: number
}

export interface inviteEmployeResponse extends inviteEmployeRequest {
    id: number
}