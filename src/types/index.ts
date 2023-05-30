export type MenuButtonType = 'manageClass' | 'manageStudent' | 'manageAttendance'

export type Subject = '국어' | '수학' | '영어' | '과학'

export type Attendance = '0' | '1' | '2'

export type Status = 'present' | 'absent' | 'inadequate'

export interface ChartData {
  subjectName: string
  focusRate: number[]
  interestRate: number[]
}

export interface EmotionData {
  day: number
  emotionList: number[]
}

export interface Student {
  id: string
  name: string
  teacherId: string
  parentId: string
}

export interface Token {
  sub: string
  type: UserType
  exp: number
}

export type UserType = 'parent' | 'teacher'
