import classNames from 'classnames/bind'
import { useState } from 'react'
import Chart from 'src/components/features/Chart'
import EmotionChart from 'src/components/features/EmotionChart'
import StudentList from 'src/components/features/StudentList'
import FullScreen from 'src/components/layout/FullScreen'
import Header from 'src/components/layout/Header'

import styles from './manageStudent.module.scss'

const cx = classNames.bind(styles)

const data = [
  {
    day: 0,
    emotionList: [6.0, 7.0, 8.0, 9.0, 10.0],
  },
  {
    day: 1,
    emotionList: [6.0, 7.0, 8.0, 9.0, 10.0],
  },
  {
    day: 2,
    emotionList: [6.0, 7.0, 8.0, 9.0, 10.0],
  },
  {
    day: 3,
    emotionList: [6.0, 7.0, 8.0, 9.0, 10.0],
  },
  {
    day: 4,
    emotionList: [6.0, 7.0, 8.0, 9.0, 10.0],
  },
]

const student = [
  {
    id: '1',
    name: '김해찬',
    teacherId: '1',
    parentId: '1',
  },
  {
    id: '2',
    name: '홍길동',
    teacherId: '1',
    parentId: '1',
  },
  {
    id: '3',
    name: '홍길동',
    teacherId: '1',
    parentId: '1',
  },
  {
    id: '4',
    name: '홍길동',
    teacherId: '1',
    parentId: '1',
  },
  {
    id: '5',
    name: '홍길동',
    teacherId: '1',
    parentId: '1',
  },
  {
    id: '6',
    name: '홍길동',
    teacherId: '1',
    parentId: '1',
  },
]

const chartCategories = ['월', '화', '수', '목', '금']
const chartData = [
  {
    subjectName: '수학',
    focusRate: [35.0, 30.5, 13.0, 14.0, 15.0],
    interestRate: [12.0, 64.5, 36.0, 28.0, 84.0],
  },
  {
    subjectName: '과학',
    focusRate: [35.0, 30.5, 13.0, 14.0, 15.0],
    interestRate: [6.0, 34.5, 64.0, 36.0, 64.0],
  },
  {
    subjectName: '영어',
    focusRate: [76.0, 74.5, 45.0, 63.0, 15.0],
    interestRate: [76.0, 45.5, 15.0, 14.0, 63.0],
  },
]

const ManageStudentPage = () => {
  const [chartVisible, setChartVisible] = useState('chart')
  return (
    <FullScreen className={cx('manageStudentPage')}>
      <Header menuTitle="학생 관리" />
      <div className={cx('buttonWrap')}>
        <button
          className={cx('button', {
            activeButton: chartVisible === 'chart',
            inactiveButton: chartVisible !== 'chart',
          })}
          onClick={() => setChartVisible('chart')}
        >
          수업 시간
        </button>
        <button
          className={cx('button', {
            activeButton: chartVisible === 'emotion',
            inactiveButton: chartVisible !== 'emotion',
          })}
          onClick={() => setChartVisible('emotion')}
        >
          학교 생활
        </button>
      </div>
      <div className={cx('contents')}>
        <div className={cx('listWrap')}>
          <StudentList students={student} />
        </div>
        <main className={cx('chartWrap')}>
          {chartVisible === 'emotion' && <EmotionChart data={data} />}
          {chartVisible === 'chart' && (
            <Chart data={chartData} categories={chartCategories} />
          )}
        </main>
      </div>
    </FullScreen>
  )
}

export default ManageStudentPage
