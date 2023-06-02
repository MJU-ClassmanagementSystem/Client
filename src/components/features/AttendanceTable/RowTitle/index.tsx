import classNames from 'classnames/bind'

import styles from './rowTitle.module.scss'

const cx = classNames.bind(styles)

type RowTitleProps = {
  children: string
  studentId?: string
}

const RowTitle = ({ children, studentId }: RowTitleProps) => {
  return (
    <th data-studentId={studentId} className={cx('rowTitle')}>
      {children}
    </th>
  )
}

export default RowTitle
