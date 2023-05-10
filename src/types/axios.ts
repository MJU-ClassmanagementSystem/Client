export interface LoginResponse {
  accessToken: string
}

export type GetAttendanceResponse = { id: string; name: string; attend: number[] }[]
