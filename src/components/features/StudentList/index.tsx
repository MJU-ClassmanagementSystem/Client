import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { Student } from 'src/types'

import styles from './student.module.scss'

interface StdentListProps {
  students: Student[]
}
const cx = classNames.bind(styles)

const StudentList = ({ students }: StdentListProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [toggleTop, setToggleTop] = useState(0)
  const listRefs = useRef<(HTMLButtonElement | null)[]>([])
  const studentId = searchParams.get('studentId')

  useEffect(() => {
    const index = students.findIndex((student) => student.id === studentId)
    if (index !== -1 && listRefs.current[index] && listRefs.current[index] !== null) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setToggleTop(listRefs.current[index]!.offsetTop)
    }
  }, [studentId, students])

  const handleClick = (id: string) => {
    setSearchParams((searchParams) => {
      searchParams.set('studentId', id)
      return searchParams
    })
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
