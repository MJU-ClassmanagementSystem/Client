import classNames from 'classnames/bind'
import { Dispatch, SetStateAction } from 'react'
import { BoardIcon, ClassIcon, StudentIcon } from 'src/assets/svgs'
import { MenuButtonType } from 'src/types'

import styles from './menuButton.module.scss'

type MenuButtonProps = {
  isActive?: boolean
  setMenu: Dispatch<SetStateAction<MenuButtonType>>
  type: MenuButtonType
}

const cx = classNames.bind(styles)

const MenuButton = ({ isActive, type, setMenu }: MenuButtonProps) => {
  const icon = {
    manageClass: <ClassIcon />,
    manageStudent: <StudentIcon />,
    manageAttendance: <BoardIcon />,
  }[type]

  const text = {
    manageClass: '수업 관리',
    manageStudent: '학생 관리',
    manageAttendance: '출석부 관리',
  }[type]

  const handleClick = () => {
    setMenu(type)
  }

  return (
    <button className={cx('button', { isActive: isActive })} onClick={handleClick}>
      {icon}
      {text}
    </button>
  )
}

export default MenuButton
