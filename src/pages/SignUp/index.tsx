import classNames from 'classnames/bind'
import { ChangeEvent, FormEvent, useState } from 'react'
import Dropdown from 'src/components/features/Dropdown'
import FullScreen from 'src/components/layout/FullScreen'
import classManagement from 'src/service/classManagement'

import styles from './signUp.module.scss'

const cx = classNames.bind(styles)

const SignUpPage = () => {
  const [selectedItem, setSelectedItem] = useState('선생님')
  // TODO: input 리펙토링
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [studentId, setStudentId] = useState('')
  const [name, setName] = useState('')
  const [school, setSchool] = useState('')

  const isTeacher = selectedItem === '선생님'
  const isParent = !isTeacher

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    // TODO: 에러 핸들링
    switch (selectedItem) {
      case '선생님':
        if (id && password && name && school)
          classManagement.signupTeacher(id, password, name, school)
        return
      case '학부모':
        if (id && password && studentId)
          classManagement.signupParent(id, password, studentId)
        return
      default:
        return
    }
  }

  return (
    <FullScreen className={cx('signUp')}>
      <div className={cx('photo')}>
        <p>Class Management System</p>
      </div>
      <div className={cx('formContainer')}>
        <form className={cx('form')} onSubmit={handleSubmit}>
          <h1 className={cx('title')}>Sign Up</h1>
          <Dropdown
            title="type"
            itemList={['선생님', '학부모']}
            value={selectedItem}
            onClick={setSelectedItem}
          />
          <label className={cx('label')} htmlFor="id">
            id
          </label>
          <input
            className={cx('input')}
            id="id"
            type="text"
            value={id}
            placeholder="아이디를 입력해주세요"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setId(e.currentTarget.value)}
          />
          <label className={cx('label')} htmlFor="password">
            password
          </label>
          <input
            className={cx('input')}
            id="password"
            type="password"
            value={password}
            placeholder="비밀번호를 입력해주세요"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.currentTarget.value)
            }
          />
          {isParent && (
            <>
              <label className={cx('label')} htmlFor="text">
                studentId
              </label>
              <input
                className={cx('input')}
                id="text"
                type="text"
                value={studentId}
                placeholder="자녀의 학번을 입력해주세요"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setStudentId(e.currentTarget.value)
                }
              />
            </>
          )}
          {isTeacher && (
            <>
              <label className={cx('label')} htmlFor="name">
                name
              </label>
              <input
                className={cx('input')}
                id="name"
                type="text"
                value={name}
                placeholder="성함을 입력해주세요"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setName(e.currentTarget.value)
                }
              />
            </>
          )}
          {isTeacher && (
            <>
              <label className={cx('label')} htmlFor="school">
                school
              </label>
              <input
                className={cx('input')}
                id="school"
                type="text"
                value={school}
                placeholder="소속된 학교를 입력해주세요"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSchool(e.currentTarget.value)
                }
              />
            </>
          )}
          <button className={cx('button')} type="submit">
            회원가입
          </button>
        </form>
      </div>
    </FullScreen>
  )
}

export default SignUpPage
