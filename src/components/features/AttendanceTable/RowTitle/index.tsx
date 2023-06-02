import classNames from 'classnames/bind'
import { MouseEvent } from 'react'

import styles from './rowTitle.module.scss'

const cx = classNames.bind(styles)

type RowTitleProps = {
  children: string
  studentId?: string
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
}

const RowTitle = ({ children, studentId, onClick }: RowTitleProps) => {
  return (
    <th>
      <button data-studentid={studentId} className={cx('rowTitle')} onClick={onClick}>
        {children}
      </button>
    </th>
  )
}

export default RowTitle
