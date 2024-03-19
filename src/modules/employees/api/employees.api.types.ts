
export interface InviteEmployeeRequest {
    recipient_email: string,
    invite_type: string,
    team_id: number,
    company_id: number
}

export interface inviteEmployeeResponse extends InviteEmployeeRequest {
    id: number
}
