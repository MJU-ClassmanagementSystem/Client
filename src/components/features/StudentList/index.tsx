import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'

import styles from './student.module.scss'

interface Student {
  id: string
  name: string
  teacherId: string
  parentId: string
}

interface StdentListProps {
  students: Student[]
}
const cx = classNames.bind(styles)

const StudentList = ({ students }: StdentListProps) => {
  const [selectedID, setSelectedID] = useState<string | null>(null)
  const [toggleTop, setToggleTop] = useState(0)
  const listRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    if (students.length > 0) {
      setSelectedID(students[0].id)
    }
  }, [students])

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
          className={cx('list')}
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
