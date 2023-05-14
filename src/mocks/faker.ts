import { faker } from '@faker-js/faker'
import { AttendanceList } from 'src/types/faker'

export const createAttendanceList = (): AttendanceList => {
  return Array.from({ length: 6 }).map(() => ({
    id: faker.string.uuid(),
    name: faker.person.lastName(),
    attend: Array.from({ length: 5 }).map(() =>
      faker.helpers.arrayElement(['0', '1', '2']),
    ),
  }))
}
