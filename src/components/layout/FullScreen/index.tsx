import classNames from 'classnames/bind'
import { PropsWithChildren } from 'react'

import styles from './fullScreen.module.scss'

type FullScreenProps = PropsWithChildren<{ className?: string }>

const cx = classNames.bind(styles)

const FullScreen = ({ children, className }: FullScreenProps) => {
  return <div className={cx(['screen', className])}>{children}</div>
}

export default FullScreen
