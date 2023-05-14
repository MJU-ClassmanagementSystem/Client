import classNames from 'classnames/bind'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EmotionChart from 'src/components/features/EmotionChart'
import FullScreen from 'src/components/layout/FullScreen'
import Header from 'src/components/layout/Header'
import useThrowAsyncError from 'src/hooks/useThrowAsyncError'
import classManagement from 'src/service/classManagement'
import { EmotionData } from 'src/types'

import styles from './manageStudent.module.scss'

const cx = classNames.bind(styles)

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
    </FullScreen>
  )
}

export default ManageStudentPage
