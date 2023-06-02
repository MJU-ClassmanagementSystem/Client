import classNames from 'classnames/bind'
import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FullScreen from 'src/components/layout/FullScreen'
import Header from 'src/components/layout/Header'
import useThrowAsyncError from 'src/hooks/useThrowAsyncError'
import classManagement from 'src/service/classManagement'
import type { ChartData } from 'src/types'

import Chart from '../../components/features/Chart'
import styles from './manageClass.module.scss'

const cx = classNames.bind(styles)

const chartCategories = ['월', '화', '수', '목', '금']

const ManageClassPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const asyncError = useThrowAsyncError()
  const [data, setData] = useState<ChartData[]>()
  const week = searchParams.get('week')

  const fetchClassFocusList = useCallback(
    async (selectedWeek: string) => {
      try {
        const { data } = await classManagement.getClassFocusList(selectedWeek)
        setData(data.data)
      } catch (error) {
        if (error instanceof Error) asyncError(error)
        console.error(error)
      }
    },
    [asyncError],
  )

  useEffect(() => {
    fetchClassFocusList(week || '0')
  }, [fetchClassFocusList, week])

  useEffect(() => {
    if (week) return
    setSearchParams('week=0')
  }, [setSearchParams, week])

  return (
    <FullScreen className={cx('manageClassPage')}>
      <Header menuTitle="수업 관리" />
      <main className={cx('chartWrap')}>
        {data && <Chart data={data} categories={chartCategories} />}
      </main>
    </FullScreen>
  )
}

export default ManageClassPage
