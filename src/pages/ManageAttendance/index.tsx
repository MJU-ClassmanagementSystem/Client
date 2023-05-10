import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import AttendanceTable from 'src/components/features/AttendanceTable'
import classManagement from 'src/service/classManagement'
import { GetAttendanceResponse } from 'src/types/axios'

import styles from './main.module.scss'

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
    <main className={cx('manageAttendancePage')}>
      {data && <AttendanceTable data={data} />}
    </main>
  )
}

export default ManageAttendancePage
