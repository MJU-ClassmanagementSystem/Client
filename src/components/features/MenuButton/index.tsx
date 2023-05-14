import classNames from 'classnames/bind'
import { useNavigate } from 'react-router-dom'
import { BoardIcon, ClassIcon, StudentIcon } from 'src/assets/svgs'
import type { MenuButtonType } from 'src/types'

import styles from './menuButton.module.scss'

type MenuButtonProps = {
  isActive?: boolean
  type: MenuButtonType
}

const cx = classNames.bind(styles)

const MenuButton = ({ isActive, type }: MenuButtonProps) => {
  const navigate = useNavigate()

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
    navigate(`${type}`)
  }

  return (
    <button className={cx('button', { isActive: isActive })} onClick={handleClick}>
      {icon}
      {text}
    </button>
  )
}

export default MenuButton
