

export interface InviteEmployeeResponse extends InviteEmployeeBody {
    id: number
}

export interface InviteEmployeeBody {
    recipient_email: string,
    invite_type: string,
    team_id: number,
    company_id: number
}