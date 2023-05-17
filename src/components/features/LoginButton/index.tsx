import classNames from 'classnames/bind'
import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginIcon } from 'src/assets/svgs'

import styles from './loginButton.module.scss'

const cx = classNames.bind(styles)

interface LoginButtonProps {
  text: string
  url: string
}

const LoginButton = ({ text, url }: LoginButtonProps) => {
  const navigate = useNavigate()

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    navigate(url)
  }

  return (
    <button type="submit" className={cx('button')} onClick={handleClick}>
      <span>{text}</span>
      <LoginIcon className={cx('icon')} />
    </button>
  )
}

export default LoginButton
