import classNames from 'classnames/bind'
import EmotionChart from 'src/components/features/EmotionChart'
import StudentList from 'src/components/features/StudentList'
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

const student = [
  {
    id: '1',
    name: '김해찬',
    teacherId: '1',
    parentId: '1',
  },
  {
    id: '2',
    name: '홍길동',
    teacherId: '1',
    parentId: '1',
  },
  {
    id: '3',
    name: '홍길동',
    teacherId: '1',
    parentId: '1',
  },
  {
    id: '4',
    name: '홍길동',
    teacherId: '1',
    parentId: '1',
  },
  {
    id: '5',
    name: '홍길동',
    teacherId: '1',
    parentId: '1',
  },
  {
    id: '6',
    name: '홍길동',
    teacherId: '1',
    parentId: '1',
  },
]

const ManageStudentPage = () => {
  return (
    <FullScreen className={cx('manageStudentPage')}>
      <Header menuTitle="학생 관리" />
      <div className={cx('contents')}>
        <div className={cx('listWrap')}>
          <StudentList students={student} />
        </div>
        <main className={cx('chartWrap')}>
          <EmotionChart data={data} />
        </main>
      </div>
    </FullScreen>
  )
}

export default ManageStudentPage
