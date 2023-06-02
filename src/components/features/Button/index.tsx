import classNames from 'classnames/bind'
import { CSSProperties, MouseEvent } from 'react'

import styles from './button.module.scss'

const cx = classNames.bind(styles)

type ButtonProps = {
  children: string
  style?: CSSProperties
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ children, style, onClick }: ButtonProps) => {
  return (
    <button style={style} className={cx('button')} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
