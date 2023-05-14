type Attendance = '0' | '1' | '2'

export type AttendanceList = {
  id: string
  name: string
  attend: Attendance[]
}[]
