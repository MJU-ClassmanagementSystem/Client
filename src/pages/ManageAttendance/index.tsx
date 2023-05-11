import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import AttendanceTable from 'src/components/features/AttendanceTable'
import Button from 'src/components/features/Button'
import FullScreen from 'src/components/layout/FullScreen'
import Header from 'src/components/layout/Header'
import classManagement from 'src/service/classManagement'
import { GetAttendanceResponse } from 'src/types/axios'

import styles from './manageAttendance.module.scss'

const cx = classNames.bind(styles)

const ManageAttendancePage = () => {
  const [data, setData] = useState<GetAttendanceResponse>()

  useEffect(() => {
    ;(async () => {
      const { data } = await classManagement.getAttendance(1)
      setData(data)
      console.log(data)
    })()
  }, [])

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
