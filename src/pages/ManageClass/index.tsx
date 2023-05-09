import classNames from 'classnames/bind'

import styles from './main.module.scss'

const cx = classNames.bind(styles)

const ManageClassPage = () => {
  return <main className={cx('manageClassPage')}>반 관리 페이지</main>
}

export default ManageClassPage
