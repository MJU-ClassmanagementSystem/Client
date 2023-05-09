import classNames from 'classnames/bind'
import { ReactNode } from 'react'

import FullScreen from '../FullScreen'
import SideBar from '../SideBar'
import styles from './mainLayout.module.scss'

type MainLayout = { children: ReactNode }

const cx = classNames.bind(styles)

const MainLayout = ({ children }: MainLayout) => {
  return (
    <FullScreen className={cx('mainLayout')}>
      <SideBar schoolName="연송초등학교" />
      {children}
    </FullScreen>
  )
}

export default MainLayout
