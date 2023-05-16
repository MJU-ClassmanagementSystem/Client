import classNames from 'classnames/bind'
import { useLocation } from 'react-router-dom'
import { GraduationIcon, LogoIcon } from 'src/assets/svgs'
import MenuButton from 'src/components/features/MenuButton'

import styles from './sideBar.module.scss'

const cx = classNames.bind(styles)

type SideBarProps = { schoolName: string }

const SideBar = ({ schoolName }: SideBarProps) => {
  const { pathname } = useLocation()

  return (
    <aside className={cx('sidebar')}>
      <div className={cx('header')}>
        <LogoIcon className={cx('logo')} />
        <p className={cx('title')}>
          <span className={cx('titlePuple')}>MJU </span>
          classM
        </p>
      </div>
      <ul>
        <li>
          <MenuButton
            type="manageClass"
            isActive={/\/manageClass(?:\/\d+)?/.test(pathname)}
          />
        </li>
        <li>
          <MenuButton
            type="manageStudent"
            isActive={/\/manageStudent(?:\/\d+)?/.test(pathname)}
          />
        </li>
        <li>
          <MenuButton
            type="manageAttendance"
            isActive={/\/manageAttendance(?:\/\d+)?/.test(pathname)}
          />
        </li>
      </ul>
      <footer className={cx('footer')}>
        {schoolName && <GraduationIcon />}
        <p>{schoolName}</p>
      </footer>
    </aside>
  )
}

export default SideBar
