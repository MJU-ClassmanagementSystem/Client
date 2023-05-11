import classNames from 'classnames/bind'
import { ArrowLeftIcon, ArrowRightIcon } from 'src/assets/svgs'

import styles from './weekNavigator.module.scss'

const cx = classNames.bind(styles)

const WeekNavigator = () => {
  return (
    <div className={cx('navigator')}>
      <button>
        <ArrowLeftIcon />
      </button>
      <h2 className={cx('week')}>4월 첫째 주</h2>
      <button>
        <ArrowRightIcon />
      </button>
    </div>
  )
}

export default WeekNavigator
