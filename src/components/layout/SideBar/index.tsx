import classNames from 'classnames/bind'
import { useState } from 'react'
import { GraduationIcon } from 'src/assets/svgs'
import MenuButton from 'src/components/features/MenuButton'
import { MenuButtonType } from 'src/types'

import styles from './sideBar.module.scss'

const cx = classNames.bind(styles)

type SideBarProps = { schoolName: string }

const SideBar = ({ schoolName }: SideBarProps) => {
  const [currentMenu, setCurrentMenu] = useState<MenuButtonType>('manageClass')

  return (
    <aside className={cx('sidebar')}>
      <div className={cx('header')}>
        <p>Class Management</p>
      </div>
      <ul>
        <li>
          <MenuButton
            type="manageClass"
            isActive={'manageClass' === currentMenu}
            setMenu={setCurrentMenu}
          />
        </li>
        <li>
          <MenuButton
            type="manageStudent"
            isActive={'manageStudent' === currentMenu}
            setMenu={setCurrentMenu}
          />
        </li>
        <li>
          <MenuButton
            type="manageAttendance"
            isActive={'manageAttendance' === currentMenu}
            setMenu={setCurrentMenu}
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
