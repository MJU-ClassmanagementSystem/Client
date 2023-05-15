import type { ChartData, EmotionData, Student } from '.'

export interface LoginResponse {
  accessToken: string
}

export type GetAttendanceResponse = { id: string; name: string; attend: string[] }[]

export type GetClassFocusListResponse = ChartData[]

export type GetStudentFocusListResponse = ChartData[]

export type GetStudentEmotionListResponse = EmotionData[]

export type GetStudentListResponse = Student[]
