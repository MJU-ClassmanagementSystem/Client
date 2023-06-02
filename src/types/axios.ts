import type { Attendance, ChartData, EmotionData, Student } from '.'

export interface LoginResponse {
  status: number
  message: string
  data: {
    accessToken: string
  }
}

export type AttendanceData = { id: string; name: string; attend: Attendance[] }[]

export interface GetAttendanceResponse {
  status: number
  message: string
  data: AttendanceData
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
