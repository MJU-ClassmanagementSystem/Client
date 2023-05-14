import classNames from 'classnames/bind'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Chart from 'src/components/features/Chart'
import EmotionChart from 'src/components/features/EmotionChart'
import FullScreen from 'src/components/layout/FullScreen'
import Header from 'src/components/layout/Header'
import useThrowAsyncError from 'src/hooks/useThrowAsyncError'
import classManagement from 'src/service/classManagement'
import { ChartData, EmotionData } from 'src/types'

import styles from './manageStudent.module.scss'

const cx = classNames.bind(styles)

const chartCategories = ['월', '화', '수', '목', '금']

const ManageStudentPage = () => {
  const { week, studentId } = useParams()
  const asyncError = useThrowAsyncError()
  const [emotionData, setEmotionData] = useState<EmotionData[]>()
  const [chartData, setChartData] = useState<ChartData[]>()

  const [visibleChart, setVisibleChart] = useState<'chart' | 'emotion'>('chart')

  const fetchStudentEmotionList = useCallback(
    async (selectedWeek: number, selectedStudent: number) => {
      try {
        const { data } = await classManagement.getStudentEmotionList(
          Number(selectedWeek),
          Number(selectedStudent),
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
    async (selectedWeek: number) => {
      try {
        const { data } = await classManagement.getClassFocusList(Number(selectedWeek))
        setChartData(data)
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

  useEffect(() => {
    fetchClassFocusList(Number(week))
  }, [fetchClassFocusList, week])

  let chart

  switch (visibleChart) {
    case 'emotion':
      chart = emotionData && <EmotionChart data={emotionData} />
      break

    case 'chart':
      chart = chartData && <Chart categories={chartCategories} data={chartData} />
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
      <main className={cx('chartWrap')}>{chart}</main>
    </FullScreen>
  )
}

export default ManageStudentPage
