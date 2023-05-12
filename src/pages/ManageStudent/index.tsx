import classNames from 'classnames/bind'
import EmotionChart from 'src/components/features/EmotionChart'
import StudentList from 'src/components/features/StudentList'

import styles from './main.module.scss'

const cx = classNames.bind(styles)

const data = [
  {
    day: 0,
    emotionList: [6.0, 7.0, 8.0, 9.0, 10.0],
  },
  {
    day: 1,
    emotionList: [6.0, 7.0, 8.0, 9.0, 10.0],
  },
  {
    day: 2,
    emotionList: [6.0, 7.0, 8.0, 9.0, 10.0],
  },
  {
    day: 3,
    emotionList: [6.0, 7.0, 8.0, 9.0, 10.0],
  },
  {
    day: 4,
    emotionList: [6.0, 7.0, 8.0, 9.0, 10.0],
  },
]

const ManageStudentPage = () => {
  return (
    <div className={cx('manageStudentPage')}>
      <h1 className={cx('pageTitle')}>학생 관리</h1>
      <div className={cx('weekSelectorWrap')} />
      <div className={cx('listWrap')}>
        <StudentList />
      </div>
      <div className={cx('chartWrap')}>
        <EmotionChart data={data} />
      </div>
    </div>
  )
}

export default ManageStudentPage
