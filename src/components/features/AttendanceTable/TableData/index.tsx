import classNames from 'classnames/bind'
import { Status } from 'src/types'

import styles from './tableData.module.scss'

const cx = classNames.bind(styles)

type TableDataProps = {
  status?: Status
}

const TableData = ({ status }: TableDataProps) => {
  const attendanceStatus =
    status &&
    {
      present: 'O',
      absent: 'X',
      inadequate: '△',
      future: '',
    }[status]

  return (
    <td className={cx('data', { warning: status === 'inadequate' })}>
      {attendanceStatus}
    </td>
  )
}

export default TableData
