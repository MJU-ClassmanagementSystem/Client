import classNames from 'classnames/bind'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeftIcon, ArrowRightIcon } from 'src/assets/svgs'

import styles from './weekNavigator.module.scss'

const cx = classNames.bind(styles)

const WeekNavigator = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { week } = useParams()

  const handleToPrevWeek = () => {
    if (!week) return
    const newUrl = pathname.replace(week, String(Number(week) + 1))
    navigate(newUrl)
  }

  const handleToNextWeek = () => {
    if (!week) return
    if (Number(week) <= 1) return
    const newUrl = pathname.replace(week, String(Number(week) - 1))
    navigate(newUrl)
  }

  return (
    <div className={cx('navigator')}>
      <button onClick={handleToPrevWeek}>
        <ArrowLeftIcon />
      </button>
      <h2 className={cx('week')}>4월 첫째 주</h2>
      <button onClick={handleToNextWeek}>
        <ArrowRightIcon />
      </button>
    </div>
  )
}

export default WeekNavigator
