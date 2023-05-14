/**
 * 오늘의 몇월의 몇주차인지 구하는 함수
 * @param date
 * @returns
 * @author BHyeonKim <rlaqhguse@gmail.com>
 */

const KOREAN_WEEK: { [index: number]: string } = {
  1: '첫째 주',
  2: '둘째 주',
  3: '셋째 주',
  4: '넷째 주',
  5: '다섯째 주',
}

export const getWeekNumber = (
  date: Date = new Date(),
): {
  month: number
  weekNumber: number
  formattedString: string
} => {
  // 1. 이번달 1일이 몇요일인지 구하기
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  // 2. 오늘이 며칠인지 구하기
  const todayDate = date.getDate()

  // 3. 몇째 주인지 구하기
  const week = Math.ceil((todayDate + firstDayOfMonth) / 7)

  // 4. 이번달 1일이 목요일 금요일 토요일 인지 확인
  if (firstDayOfMonth > 3 && week === 1)
    // 5. 목, 금, 토 이면 전 달의 마지막 주차를 weekNumber로 반환
    return {
      month: date.getMonth(),
      weekNumber: Math.floor(
        (new Date(date.getFullYear(), date.getMonth(), 0).getDate() +
          new Date(date.getFullYear(), date.getMonth(), 1).getDay()) /
          7,
      ),
      formattedString: `${date.getMonth()}월 ${
        KOREAN_WEEK[
          Math.floor(
            (new Date(date.getFullYear(), date.getMonth(), 0).getDate() +
              new Date(date.getFullYear(), date.getMonth(), 1).getDay()) /
              7,
          )
        ]
      }`,
    }

  if (firstDayOfMonth > 3)
    return {
      month: date.getMonth() + 1,
      weekNumber: week - 1,
      formattedString: `${date.getMonth() + 1}월 ${KOREAN_WEEK[week - 1]}`,
    }

  return {
    month: date.getMonth() + 1,
    weekNumber: week,
    formattedString: `${date.getMonth() + 1}월 ${KOREAN_WEEK[week]}`,
  }
}
