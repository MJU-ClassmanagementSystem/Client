import { faker } from '@faker-js/faker'
import { GetClassFocusListResponse, GetStudentEmotionListResponse } from 'src/types/axios'
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

export const createClassFocusList = (): GetClassFocusListResponse => {
  return [
    {
      subjectName: '국어',
      focusRate: Array.from({ length: 5 }, () =>
        faker.number.float({ max: 100, min: 0, precision: 0.01 }),
      ),
      interestRate: Array.from({ length: 5 }, () =>
        faker.number.float({ max: 100, min: 0, precision: 0.01 }),
      ),
    },
    {
      subjectName: '수학',
      focusRate: Array.from({ length: 5 }, () =>
        faker.number.float({ max: 100, min: 0, precision: 0.01 }),
      ),
      interestRate: Array.from({ length: 5 }, () =>
        faker.number.float({ max: 100, min: 0, precision: 0.01 }),
      ),
    },
    {
      subjectName: '영어',
      focusRate: Array.from({ length: 5 }, () =>
        faker.number.float({ max: 100, min: 0, precision: 0.01 }),
      ),
      interestRate: Array.from({ length: 5 }, () =>
        faker.number.float({ max: 100, min: 0, precision: 0.01 }),
      ),
    },
    {
      subjectName: '과학',
      focusRate: Array.from({ length: 5 }, () =>
        faker.number.float({ max: 100, min: 0, precision: 0.01 }),
      ),
      interestRate: Array.from({ length: 5 }, () =>
        faker.number.float({ max: 100, min: 0, precision: 0.01 }),
      ),
    },
  ]
}

export const createStudentEmotionList = (): GetStudentEmotionListResponse => {
  return [
    {
      day: 0,
      emotionList: Array.from({ length: 5 }, () =>
        faker.number.float({ max: 10, min: 0, precision: 0.01 }),
      ),
    },
    {
      day: 1,
      emotionList: Array.from({ length: 5 }, () =>
        faker.number.float({ max: 10, min: 0, precision: 0.01 }),
      ),
    },
    {
      day: 2,
      emotionList: Array.from({ length: 5 }, () =>
        faker.number.float({ max: 10, min: 0, precision: 0.01 }),
      ),
    },
    {
      day: 3,
      emotionList: Array.from({ length: 5 }, () =>
        faker.number.float({ max: 10, min: 0, precision: 0.01 }),
      ),
    },
    {
      day: 4,
      emotionList: Array.from({ length: 5 }, () =>
        faker.number.float({ max: 10, min: 0, precision: 0.01 }),
      ),
    },
  ]
}
