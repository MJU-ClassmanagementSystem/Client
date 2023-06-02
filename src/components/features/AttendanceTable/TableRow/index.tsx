import { Status } from 'src/types'

import RowTitle from '../RowTitle'
import TableData from '../TableData'

type TableRow = {
  dataTitle: string
  mon?: Status
  tue?: Status
  wed?: Status
  thur?: Status
  fri?: Status
  studentId?: string
}

const TableRow = ({ dataTitle, mon, tue, wed, thur, fri, studentId }: TableRow) => {
  return (
    <tr>
      <RowTitle studentId={studentId}>{dataTitle}</RowTitle>
      <TableData status={mon} />
      <TableData status={tue} />
      <TableData status={wed} />
      <TableData status={thur} />
      <TableData status={fri} />
    </tr>
  )
}

export default TableRow
