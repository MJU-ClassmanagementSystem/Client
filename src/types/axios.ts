import type { ChartData, EmotionData, Student } from '.'

export interface LoginResponse {
  status: number
  message: string
  data: {
    accessToken: string
  }
}

export interface GetAttendanceResponse {
  status: number
  message: string
  data: { id: string; name: string; attend: string[] }[]
}
export interface GetClassFocusListResponse {
  status: number
  message: string
  data: ChartData[]
}
export interface GetStudentFocusListResponse {
  status: number
  message: string
  data: ChartData[]
}

export interface GetStudentEmotionListResponse {
  status: number
  message: string
  data: EmotionData[]
}
export interface GetStudentListResponse {
  status: number
  message: string
  data: Student[]
}
