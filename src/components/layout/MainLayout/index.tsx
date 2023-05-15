import classNames from 'classnames/bind'
import { PropsWithChildren, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import FullScreen from '../FullScreen'
import SideBar from '../SideBar'
import styles from './mainLayout.module.scss'

const cx = classNames.bind(styles)

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <FullScreen className={cx('mainLayout')}>
      <SideBar schoolName="연송초등학교" />
      {children || <Outlet />}
    </FullScreen>
  )
}

export default MainLayout
