import classNames from 'classnames/bind'
import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import AttendanceTable from 'src/components/features/AttendanceTable'
import Button from 'src/components/features/Button'
import FullScreen from 'src/components/layout/FullScreen'
import Header from 'src/components/layout/Header'
import useThrowAsyncError from 'src/hooks/useThrowAsyncError'
import classManagement from 'src/service/classManagement'
import type { GetAttendanceResponse } from 'src/types/axios'

import styles from './manageAttendance.module.scss'

const cx = classNames.bind(styles)

const ManageAttendancePage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const asyncError = useThrowAsyncError()
  const [data, setData] = useState<GetAttendanceResponse>()
  const week = searchParams.get('week')

  const fetchAttendance = useCallback(
    async (selectedWeek: string) => {
      try {
        const { data } = await classManagement.getAttendance(selectedWeek)
        setData(data)
      } catch (error) {
        if (error instanceof Error) asyncError(error)
        console.error(error)
      }
    },
    [asyncError],
  )

  useEffect(() => {
    fetchAttendance(week || '1')
  }, [fetchAttendance, week])

  useEffect(() => {
    if (week) return
    setSearchParams('week=1')
  }, [setSearchParams, week])

  return (
    <FullScreen className={cx('manageAttendancePage')}>
      <Header menuTitle="출석부" />
      <main className={cx('main')}>
        <div className={cx('buttonContainer')}>
          <Button>학생 추가</Button>
          <Button>학생 삭제</Button>
        </div>
        {data && <AttendanceTable data={data} />}
      </main>
    </FullScreen>
  )
}

export default ManageAttendancePage
