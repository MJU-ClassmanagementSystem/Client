import classNames from 'classnames/bind'
import EmotionChart from 'src/components/features/EmotionChart'
import FullScreen from 'src/components/layout/FullScreen'
import Header from 'src/components/layout/Header'

import styles from './manageStudent.module.scss'

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
    <FullScreen className={cx('manageStudentPage')}>
      <Header menuTitle="학생관리" />
      <main className={cx('chartWrap')}>
        <EmotionChart data={data} />
      </main>
    </FullScreen>
  )
}

export default ManageStudentPage
