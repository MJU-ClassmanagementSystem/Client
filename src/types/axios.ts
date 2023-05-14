import { ChartData, EmotionData } from '.'

export interface LoginResponse {
  accessToken: string
}

export type GetAttendanceResponse = { id: string; name: string; attend: number[] }[]

export type GetClassFocusListResponse = ChartData[]

export type GetStudentEmotionListResponse = EmotionData[]
