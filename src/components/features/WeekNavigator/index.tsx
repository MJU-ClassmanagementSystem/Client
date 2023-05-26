import classNames from 'classnames/bind'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowLeftIcon, ArrowRightIcon } from 'src/assets/svgs'
import { getWeekNumber } from 'src/utils/week'

import styles from './weekNavigator.module.scss'

const cx = classNames.bind(styles)

const todayDate = new Date()

const WeekNavigator = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const week = searchParams.get('week')
  const [date, setDate] = useState<Date>(
    new Date(
      todayDate.getFullYear(),
      todayDate.getMonth(),
      todayDate.getDate() - (Number(week) - 1) * 7,
    ),
  )
  const { formattedString } = getWeekNumber(date)

  const handleToPrevWeek = () => {
    if (!week) return
    setDate((date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7))
    setSearchParams((searchParams) => {
      const prevWeek = Number(searchParams.get('week')) + 1
      searchParams.set('week', prevWeek.toString())
      return searchParams
    })
  }

  const handleToNextWeek = () => {
    if (!week) return
    if (Number(week) <= 1) return
    setDate((date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7))
    setSearchParams((searchParams) => {
      const nextWeek = Number(searchParams.get('week')) - 1
      searchParams.set('week', nextWeek.toString())
      return searchParams
    })
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
