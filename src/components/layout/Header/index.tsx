import classNames from 'classnames/bind'
import WeekNavigator from 'src/components/features/WeekNavigator'

import styles from './header.module.scss'

type HeaderProps = {
  menuTitle: string
}

const cx = classNames.bind(styles)

const Header = ({ menuTitle }: HeaderProps) => {
  return (
    <header className={cx('header')}>
      <h1 className={cx('title')}>{menuTitle}</h1>
      <WeekNavigator />
    </header>
  )
}

export default Header
