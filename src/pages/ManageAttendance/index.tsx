import classNames from 'classnames/bind'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AttendanceTable from 'src/components/features/AttendanceTable'
import Button from 'src/components/features/Button'
import FullScreen from 'src/components/layout/FullScreen'
import Header from 'src/components/layout/Header'
import useThrowAsyncError from 'src/hooks/useThrowAsyncError'
import classManagement from 'src/service/classManagement'
import { GetAttendanceResponse } from 'src/types/axios'

import styles from './manageAttendance.module.scss'

const cx = classNames.bind(styles)

const ManageAttendancePage = () => {
  const { week } = useParams()
  const asyncError = useThrowAsyncError()
  const [data, setData] = useState<GetAttendanceResponse>()

  console.log(week)

  const fetchAttendance = useCallback(
    async (selectedWeek: number) => {
      try {
        const { data } = await classManagement.getAttendance(Number(selectedWeek))
        setData(data)
      } catch (error) {
        if (error instanceof Error) asyncError(error)
        console.error(error)
      }
    },
    [asyncError],
  )

  useEffect(() => {
    fetchAttendance(Number(week))
  }, [fetchAttendance, week])

  return (
    <FullScreen className={cx('manageAttendancePage')}>
      <Header />
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
