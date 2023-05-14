import classNames from 'classnames/bind'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EmotionChart from 'src/components/features/EmotionChart'
import StudentList from 'src/components/features/StudentList'
import FullScreen from 'src/components/layout/FullScreen'
import Header from 'src/components/layout/Header'
import useThrowAsyncError from 'src/hooks/useThrowAsyncError'
import classManagement from 'src/service/classManagement'
import { EmotionData } from 'src/types'

import styles from './manageStudent.module.scss'

const cx = classNames.bind(styles)



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
  const { week, studentId } = useParams()
  const asyncError = useThrowAsyncError()
  const [data, setData] = useState<EmotionData[]>()

  const fetchStudentEmotionList = useCallback(
    async (selectedWeek: number, selectedStudent: number) => {
      try {
        const { data } = await classManagement.getStudentEmotionList(
          Number(selectedWeek),
          Number(selectedStudent),
        )
        setData(data)
      } catch (error) {
        if (error instanceof Error) asyncError(error)
        console.error(error)
      }
    },
    [asyncError],
  )

  useEffect(() => {
    fetchStudentEmotionList(Number(week), Number(studentId))
  }, [fetchStudentEmotionList, studentId, week])

  return (
    <FullScreen className={cx('manageStudentPage')}>
      <Header menuTitle="학생관리" />
      <main className={cx('chartWrap')}>{data && <EmotionChart data={data} />}</main>
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
