import classNames from 'classnames/bind'
import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeftIcon, ArrowRightIcon } from 'src/assets/svgs'
import { getWeekNumber } from 'src/utils/week'

import styles from './weekNavigator.module.scss'

const cx = classNames.bind(styles)

const todayDate = new Date()

const WeekNavigator = () => {
  const navigate = useNavigate()
  const { week } = useParams()
  const [date, setDate] = useState<Date>(
    new Date(
      todayDate.getFullYear(),
      todayDate.getMonth(),
      todayDate.getDate() - (Number(week) - 1) * 7,
    ),
  )
  const { pathname } = useLocation()
  const { formattedString } = getWeekNumber(date)

  const handleToPrevWeek = () => {
    if (!week) return
    const newUrl = pathname
      .split('/')
      .slice(0, -1)
      .join('/')
      .concat('/' + String(Number(week) + 1))
    setDate((date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7))
    navigate(newUrl)
  }

  const handleToNextWeek = () => {
    if (!week) return
    if (Number(week) <= 1) return
    const newUrl = pathname
      .split('/')
      .slice(0, -1)
      .join('/')
      .concat('/' + String(Number(week) - 1))
    setDate((date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7))
    navigate(newUrl)
  }

  return (
    <div className={cx('navigator')}>
      <button onClick={handleToPrevWeek}>
        <ArrowLeftIcon />
      </button>
      <h2 className={cx('week')}>{formattedString}</h2>
      <button onClick={handleToNextWeek}>
        <ArrowRightIcon />
      </button>
    </div>
  )
}

export default WeekNavigator
