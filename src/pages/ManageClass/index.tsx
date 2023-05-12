import classNames from 'classnames/bind'

import Chart from '../../components/features/Chart'
import styles from './main.module.scss'

const cx = classNames.bind(styles)

const chartCategories = ['월', '화', '수', '목', '금']
const chartData = [
  {
    subjectName: '수학',
    focusRate: [35.0, 30.5, 13.0, 14.0, 15.0],
    interestRate: [12.0, 64.5, 36.0, 28.0, 84.0],
  },
  {
    subjectName: '과학',
    focusRate: [35.0, 30.5, 13.0, 14.0, 15.0],
    interestRate: [6.0, 34.5, 64.0, 36.0, 64.0],
  },
  {
    subjectName: '영어',
    focusRate: [76.0, 74.5, 45.0, 63.0, 15.0],
    interestRate: [76.0, 45.5, 15.0, 14.0, 63.0],
  },
]

const ManageClassPage = () => {
  return (
    <div className={cx('manageAttendancePage')}>
      <h1 className={cx('pageTitle')}>수업 관리</h1>
      <div className={cx('weekSelectorWrap')} />
      <div className={cx('chartWrap')}>
        <Chart data={chartData} categories={chartCategories} />
      </div>
    </div>
  )
}

export default ManageClassPage
