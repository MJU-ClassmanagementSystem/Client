import classNames from 'classnames/bind'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import icon from '../../../assets/svgs/subtract.svg'
import styles from './loginButton.module.scss'

const cx = classNames.bind(styles)

interface LoginButtonProps {
  text: string
  url: string
}

const LoginButton: FC<LoginButtonProps> = ({ text, url }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(url)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(url)
    }
  }

  return (
    <button className={cx('button')} onClick={handleClick} onKeyDown={handleKeyDown}>
      <span>{text}</span>
      <img src={icon} alt="icon" className={cx('icon')} />
    </button>
  )
}

export default LoginButton
