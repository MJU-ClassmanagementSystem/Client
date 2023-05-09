import classNames from 'classnames/bind'
import { useLocation } from 'react-router-dom'
import { GraduationIcon } from 'src/assets/svgs'
import MenuButton from 'src/components/features/MenuButton'

import styles from './sideBar.module.scss'

const cx = classNames.bind(styles)

type SideBarProps = { schoolName: string }

const SideBar = ({ schoolName }: SideBarProps) => {
  const { pathname } = useLocation()
  const parsedMenu = pathname.replace('/', '')

  return (
    <aside className={cx('sidebar')}>
      <div className={cx('header')}>
        <p>Class Management</p>
      </div>
      <ul>
        <li>
          <MenuButton type="manageClass" isActive={'manageClass' === parsedMenu} />
        </li>
        <li>
          <MenuButton type="manageStudent" isActive={'manageStudent' === parsedMenu} />
        </li>
        <li>
          <MenuButton
            type="manageAttendance"
            isActive={'manageAttendance' === parsedMenu}
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
