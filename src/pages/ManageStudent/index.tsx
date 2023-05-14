import classNames from 'classnames/bind'
import { useState } from 'react'
import Chart from 'src/components/features/Chart'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EmotionChart from 'src/components/features/EmotionChart'
import StudentList from 'src/components/features/StudentList'
import FullScreen from 'src/components/layout/FullScreen'
import Header from 'src/components/layout/Header'
import useThrowAsyncError from 'src/hooks/useThrowAsyncError'
import classManagement from 'src/service/classManagement'
import { EmotionData } from 'src/types'

import styles from './manageStudent.module.scss'

const cx = classNames.bind(styles)



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
  const { week, studentId } = useParams()
  const asyncError = useThrowAsyncError()
  const [data, setData] = useState<EmotionData[]>()
  const [chartVisible, setChartVisible] = useState('chart')

    
  const fetchStudentEmotionList = useCallback(
    async (selectedWeek: number, selectedStudent: number) => {
      try {
        const { data } = await classManagement.getStudentEmotionList(
          Number(selectedWeek),
          Number(selectedStudent),
        )
        setData(data)
      } catch (error) {
        if (error instanceof Error) asyncError(error)
        console.error(error)
      }
    },
    [asyncError],
  )

  useEffect(() => {
    fetchStudentEmotionList(Number(week), Number(studentId))
  }, [fetchStudentEmotionList, studentId, week])

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
  )
}

export default ManageStudentPage
