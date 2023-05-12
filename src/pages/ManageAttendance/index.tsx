import classNames from 'classnames/bind'

import styles from './main.module.scss'

const cx = classNames.bind(styles)

const ManageAttendancePage = () => {
  return <main className={cx('manageAttendancePage')}>출석부 관리 페이지</main>
}

export default ManageAttendancePage
