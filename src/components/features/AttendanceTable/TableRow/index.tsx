import { MouseEvent } from 'react'
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
  onClickTitle?: (e?: MouseEvent<HTMLButtonElement>) => void
}

const TableRow = ({
  dataTitle,
  mon,
  tue,
  wed,
  thur,
  fri,
  onClickTitle,
  studentId,
}: TableRow) => {
  return (
    <tr>
      <RowTitle onClick={onClickTitle} studentId={studentId}>
        {dataTitle}
      </RowTitle>
      <TableData status={mon} />
      <TableData status={tue} />
      <TableData status={wed} />
      <TableData status={thur} />
      <TableData status={fri} />
    </tr>
  )
}

export default TableRow
