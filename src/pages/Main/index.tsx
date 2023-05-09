import classNames from 'classnames/bind'
import MainLayout from 'src/components/layout/MainLayout'

import styles from './main.module.scss'

const cx = classNames.bind(styles)

const MainPage = () => {
  return (
    <MainLayout>
      <main className={cx('mainPage')}>메인페이지</main>
    </MainLayout>
  )
}

export default MainPage
