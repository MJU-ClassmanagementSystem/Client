import classNames from 'classnames/bind'

import styles from './main.module.scss'

const cx = classNames.bind(styles)

const ManageStudentPage = () => {
  return <main className={cx('manageStudentPage')}>학생 관리 페이지</main>
}

export default ManageStudentPage
