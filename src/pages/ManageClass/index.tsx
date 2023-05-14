import classNames from 'classnames/bind'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FullScreen from 'src/components/layout/FullScreen'
import Header from 'src/components/layout/Header'
import useThrowAsyncError from 'src/hooks/useThrowAsyncError'
import classManagement from 'src/service/classManagement'
import { ChartData } from 'src/types'

import Chart from '../../components/features/Chart'
import styles from './manageClass.module.scss'

const cx = classNames.bind(styles)

const chartCategories = ['월', '화', '수', '목', '금']

const ManageClassPage = () => {
  const { week } = useParams()
  const asyncError = useThrowAsyncError()
  const [data, setData] = useState<ChartData[]>()

  const fetchClassFocusList = useCallback(
    async (selectedWeek: number) => {
      try {
        const { data } = await classManagement.getClassFocusList(Number(selectedWeek))
        setData(data)
      } catch (error) {
        if (error instanceof Error) asyncError(error)
        console.error(error)
      }
    },
    [asyncError],
  )

  useEffect(() => {
    fetchClassFocusList(Number(week))
  }, [fetchClassFocusList, week])

  return (
    <FullScreen className={cx('manageClassPage')}>
      <Header menuTitle="수업관리" />
      <main className={cx('chartWrap')}>
        {data && <Chart data={data} categories={chartCategories} />}
      </main>
    </FullScreen>
  )
}

export default ManageClassPage
