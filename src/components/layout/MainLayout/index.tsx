import classNames from 'classnames/bind'
import { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import Button from 'src/components/features/Button'
import { authState } from 'src/recoil/atom'

import FullScreen from '../FullScreen'
import SideBar from '../SideBar'
import styles from './mainLayout.module.scss'

const cx = classNames.bind(styles)

const MainLayout = ({ children }: PropsWithChildren) => {
  const setAuth = useSetRecoilState(authState)
  const handleLogout = () => {
    setAuth('')
  }

  return (
    <FullScreen className={cx('mainLayout')}>
      <SideBar schoolName="연송초등학교" />
      <Button
        style={{ position: 'absolute', top: '20px', right: '20px' }}
        onClick={handleLogout}
      >
        로그아웃
      </Button>
      {children || <Outlet />}
    </FullScreen>
  )
}

export default MainLayout
