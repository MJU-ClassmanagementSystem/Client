import classNames from 'classnames/bind'

import styles from './button.module.scss'

const cx = classNames.bind(styles)

type ButtonProps = { children: string }

const Button = ({ children }: ButtonProps) => {
  return <button className={cx('button')}>{children}</button>
}

export default Button
