export type MenuButtonType = 'manageClass' | 'manageStudent' | 'manageAttendance'

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
