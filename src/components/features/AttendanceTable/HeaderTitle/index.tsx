import classNames from 'classnames/bind'

import styles from './headerTitle.module.scss'

const cx = classNames.bind(styles)

type HeaderTitleProps = {
  children?: string
}

const HeaderTitle = ({ children }: HeaderTitleProps) => {
  return <th className={cx('headerTitle')}>{children}</th>
}

export default HeaderTitle
