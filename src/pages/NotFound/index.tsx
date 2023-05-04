import classNames from 'classnames/bind'
import FullScreen from 'src/components/layout/FullScreen'

import styles from './notFound.module.scss'

const cx = classNames.bind(styles)

const NotFoundPage = () => {
  return (
    <FullScreen className={cx('center')}>
      <h1 className={cx('title')}>404</h1>
      <p>Something went Wrong</p>
    </FullScreen>
  )
}

export default NotFoundPage
