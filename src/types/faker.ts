type Attendance = '0' | '1' | '2'

export type AttendanceList = {
  id: string
  name: string
  attend: Attendance[]
}[]

export type Subject = '국어' | '수학' | '영어' | '과학'
