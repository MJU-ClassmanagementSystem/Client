import classNames from 'classnames/bind'

import styles from './attendanceTable.module.scss'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

const cx = classNames.bind(styles)

const AttendanceTable = () => {
  return (
    <table className={cx('table')}>
      <TableHeader />
      <tbody>
        <TableRow
          dataTitle="김보현"
          mon="absent"
          tue="inadequate"
          wed="present"
          thur="present"
        />
        <TableRow
          dataTitle="박은서"
          mon="absent"
          tue="inadequate"
          wed="present"
          thur="present"
        />
        <TableRow
          dataTitle="박은서"
          mon="absent"
          tue="inadequate"
          wed="present"
          thur="present"
        />
        <TableRow
          dataTitle="박은서"
          mon="absent"
          tue="inadequate"
          wed="present"
          thur="present"
          fri="inadequate"
        />
        <TableRow
          dataTitle="박은서"
          mon="absent"
          tue="inadequate"
          wed="present"
          thur="present"
        />
      </tbody>
    </table>
  )
}

export default AttendanceTable
