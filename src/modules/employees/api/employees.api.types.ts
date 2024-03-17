
export interface inviteEmployeeRequest {
    recipient_email: string,
    invite_type: string,
    team_id: number,
    company_id: number
}

export interface inviteEmployeeResponse extends inviteEmployeeRequest {
    id: number
}