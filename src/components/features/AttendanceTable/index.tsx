import classNames from 'classnames/bind'
import { Status } from 'src/types'
import { GetAttendanceResponse } from 'src/types/axios'

import styles from './attendanceTable.module.scss'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

type AttendanceTableProps = {
  data: GetAttendanceResponse
}

const cx = classNames.bind(styles)

const convertedType: { [key: number]: Status } = {
  0: 'present',
  1: 'absent',
  2: 'inadequate',
}

const AttendanceTable = ({ data }: AttendanceTableProps) => {
  return (
    <table className={cx('table')}>
      <TableHeader />
      <tbody>
        {data.map((item, key) => (
          <TableRow
            key={`${item.name}-${key + 1}`}
            dataTitle={item.name}
            mon={convertedType[item.attend[0]]}
            tue={convertedType[item.attend[1]]}
            wed={convertedType[item.attend[2]]}
            thur={convertedType[item.attend[3]]}
            fri={convertedType[item.attend[4]]}
          />
        ))}
      </tbody>
    </table>
  )
}

export default AttendanceTable