import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'

import styles from './student.module.scss'

interface Student {
  id: string
  name: string
  teacherId: string
  parentId: string
}
const cx = classNames.bind(styles)

const StudentList = () => {
  const [students, setStudents] = useState<Student[]>([])

  useEffect(() => {
    const fetchData = () => {
      return [
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
    }

    const data = fetchData()
    setStudents(data)
  }, [])

  return (
    <div className={cx('listWrap')}>
      {students.map((student) => (
        <div className={cx('list')} key={student.id}>
          {student.name}
        </div>
      ))}
    </div>
  )
}

export default StudentList
