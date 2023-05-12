import classNames from 'classnames/bind'
import WeekNavigator from 'src/components/features/WeekNavigator'

import styles from './header.module.scss'

const cx = classNames.bind(styles)

const Header = () => {
  return (
    <header className={cx('header')}>
      <h1 className={cx('title')}>출석부</h1>
      <WeekNavigator />
    </header>
  )
}

export default Header
