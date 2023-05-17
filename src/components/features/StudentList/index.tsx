import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import type { Student } from 'src/types'

import styles from './student.module.scss'

interface StdentListProps {
  students: Student[]
}
const cx = classNames.bind(styles)

const StudentList = ({ students }: StdentListProps) => {
  const { studentId, week } = useParams()
  const [toggleTop, setToggleTop] = useState(0)
  const listRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const index = students.findIndex((student) => student.id === studentId)
    if (index !== -1 && listRefs.current[index] && listRefs.current[index] !== null) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setToggleTop(listRefs.current[index]!.offsetTop)
    }
  }, [studentId, students])

  return (
    <div className={cx('listWrap')}>
      {students.map((student, index) => (
        <Link
          ref={(ref) => (listRefs.current[index] = ref)}
          className={cx('list')}
          key={student.id}
          to={`/manageStudent/${student.id}/${week}`}
        >
          {student.name}
        </Link>
      ))}
      <div className={cx('toggle')} style={{ top: toggleTop }} />
    </div>
  )
}

export default StudentList
