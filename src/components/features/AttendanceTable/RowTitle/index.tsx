import classNames from 'classnames/bind'

import styles from './rowTitle.module.scss'

const cx = classNames.bind(styles)

type RowTitleProps = {
  children: string
}

const RowTitle = ({ children }: RowTitleProps) => {
  return <th className={cx('rowTitle')}>{children}</th>
}

export default RowTitle
