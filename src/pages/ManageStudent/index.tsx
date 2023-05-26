import classNames from 'classnames/bind'
import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Chart from 'src/components/features/Chart'
import EmotionChart from 'src/components/features/EmotionChart'
import StudentList from 'src/components/features/StudentList'
import FullScreen from 'src/components/layout/FullScreen'
import Header from 'src/components/layout/Header'
import useThrowAsyncError from 'src/hooks/useThrowAsyncError'
import classManagement from 'src/service/classManagement'
import type { ChartData, EmotionData, Student } from 'src/types'

import styles from './manageStudent.module.scss'

const cx = classNames.bind(styles)

const ManageStudentPage = () => {
  const asyncError = useThrowAsyncError()
  const [searchParams, setSearchParams] = useSearchParams()
  const [emotionData, setEmotionData] = useState<EmotionData[]>()
  const [chartData, setChartData] = useState<ChartData[]>()
  const [studentsData, setStudentsData] = useState<Student[]>()
  const [visibleChart, setVisibleChart] = useState<'chart' | 'emotion'>('chart')
  const week = searchParams.get('week')
  const studentId = searchParams.get('week')

  const fetchStudentEmotionList = useCallback(
    async (selectedWeek: string, selectedStudent: string) => {
      try {
        const { data } = await classManagement.getStudentEmotionList(
          selectedWeek,
          selectedStudent,
        )
        setEmotionData(data)
      } catch (error) {
        if (error instanceof Error) asyncError(error)
        console.error(error)
      }
    },
    [asyncError],
  )

  const fetchClassFocusList = useCallback(
    async (selectedWeek: string, selectedStudent: string) => {
      try {
        const { data } = await classManagement.getStudentFocusList(
          selectedWeek,
          selectedStudent,
        )
        setChartData(data)
      } catch (error) {
        if (error instanceof Error) asyncError(error)
        console.error(error)
      }
    },
    [asyncError],
  )

  const fetchStudentList = useCallback(async () => {
    try {
      const { data } = await classManagement.getStudentList()
      setStudentsData(data)
    } catch (error) {
      if (error instanceof Error) asyncError(error)
      console.error(error)
    }
  }, [asyncError])

  useEffect(() => {
    fetchStudentEmotionList(week || '1', studentId || '1')
  }, [fetchStudentEmotionList, studentId, week])

  useEffect(() => {
    fetchClassFocusList(week || '1', studentId || '1')
  }, [fetchClassFocusList, studentId, week])

  useEffect(() => {
    fetchStudentList()
  }, [fetchStudentList])

  useEffect(() => {
    if (week || studentId) return
    setSearchParams('week=1&studentId=1')
  }, [setSearchParams, studentId, week])

  let chart

  switch (visibleChart) {
    case 'emotion':
      chart = emotionData && <EmotionChart data={emotionData} />
      break

    case 'chart':
      chart = chartData && <Chart data={chartData} />
      break
  }

  return (
    <FullScreen className={cx('manageStudentPage')}>
      <Header menuTitle="학생 관리" />
      <div className={cx('buttonWrap')}>
        <button
          className={cx('button', {
            activeButton: visibleChart === 'chart',
            inactiveButton: visibleChart !== 'chart',
          })}
          onClick={() => setVisibleChart('chart')}
        >
          수업 시간
        </button>
        <button
          className={cx('button', {
            activeButton: visibleChart === 'emotion',
            inactiveButton: visibleChart !== 'emotion',
          })}
          onClick={() => setVisibleChart('emotion')}
        >
          학교 생활
        </button>
      </div>
      <main className={cx('chartWrap')}>
        <div className={cx('selector')}>
          {studentsData && <StudentList students={studentsData} />}
        </div>
        {chart}
      </main>
    </FullScreen>
  )
}

export default ManageStudentPage
