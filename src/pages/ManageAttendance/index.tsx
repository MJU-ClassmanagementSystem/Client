import classNames from 'classnames/bind'
import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import AttendanceTable from 'src/components/features/AttendanceTable'
import Button from 'src/components/features/Button'
import FullScreen from 'src/components/layout/FullScreen'
import Header from 'src/components/layout/Header'
import useThrowAsyncError from 'src/hooks/useThrowAsyncError'
import { userTypeState } from 'src/recoil/atom'
import classManagement from 'src/service/classManagement'
import type { AttendanceData } from 'src/types/axios'

import styles from './manageAttendance.module.scss'

const cx = classNames.bind(styles)

const ManageAttendancePage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const asyncError = useThrowAsyncError()
  const [data, setData] = useState<AttendanceData>()
  const week = searchParams.get('week')
  const userType = useRecoilValue(userTypeState)

  const isTeacher = userType === 'teacher'

  const fetchAttendance = useCallback(
    async (selectedWeek: string) => {
      try {
        const { data } = await classManagement.getAttendance(selectedWeek)
        setData(data.data)
      } catch (error) {
        if (error instanceof Error) asyncError(error)
        console.error(error)
      }
    },
    [asyncError],
  )

  useEffect(() => {
    fetchAttendance(week || '0')
  }, [fetchAttendance, week])

  useEffect(() => {
    if (week) return
    setSearchParams('week=0')
  }, [setSearchParams, week])

  return (
    <FullScreen className={cx('manageAttendancePage')}>
      <Header menuTitle="출석부" />
      <main className={cx('main')}>
        {isTeacher && (
          <div className={cx('buttonContainer')}>
            <Button>학생 추가</Button>
            <Button>학생 삭제</Button>
          </div>
        )}
        {data && <AttendanceTable data={data} />}
      </main>
    </FullScreen>
  )
}

export default ManageAttendancePage
