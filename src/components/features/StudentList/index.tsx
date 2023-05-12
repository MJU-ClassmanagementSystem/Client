import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'

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
  const [selectedID, setSelectedID] = useState<string | null>(null)
  const [toggleTop, setToggleTop] = useState(0)
  const listRefs = useRef<(HTMLButtonElement | null)[]>([])

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
    if (data.length > 0) {
      setSelectedID(data[0].id)
    }
  }, [])

  useEffect(() => {
    const index = students.findIndex((student) => student.id === selectedID)
    if (index !== -1 && listRefs.current[index] && listRefs.current[index] !== null) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setToggleTop(listRefs.current[index]!.offsetTop)
    }
  }, [selectedID, students])

  const handleClick = (id: string) => {
    setSelectedID(id)
  }

  return (
    <div className={cx('listWrap')}>
      {students.map((student, index) => (
        <button
          ref={(ref) => (listRefs.current[index] = ref)}
          className={cx('list', { selected: student.id === selectedID })}
          key={student.id}
          onClick={() => handleClick(student.id)}
        >
          {student.name}
        </button>
      ))}
      <div className={cx('toggle')} style={{ top: toggleTop }} />
    </div>
  )
}

export default StudentList
