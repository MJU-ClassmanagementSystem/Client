import classNames from 'classnames/bind'
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
      <LoginIcon className={cx('icon')} />
    </button>
  )
}

export default LoginButton
