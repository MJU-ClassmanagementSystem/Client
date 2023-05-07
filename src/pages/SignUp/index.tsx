import classNames from 'classnames/bind'
import { useState } from 'react'
import Dropdown from 'src/components/features/Dropdown'
import FullScreen from 'src/components/layout/FullScreen'

import styles from './signUp.module.scss'

const cx = classNames.bind(styles)

const SignUpPage = () => {
  const [selectedItem, setSelectedItem] = useState('선생님')

  const isTeacher = selectedItem === '선생님'
  const isParent = !isTeacher

  return (
    <FullScreen className={cx('signUp')}>
      <div className={cx('photo')}>
        <p>Class Management System</p>
      </div>
      <div className={cx('formContainer')}>
        <form className={cx('form')}>
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
            placeholder="아이디를 입력해주세요"
          />
          <label className={cx('label')} htmlFor="password">
            password
          </label>
          <input
            className={cx('input')}
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
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
                placeholder="자녀의 학번을 입력해주세요"
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
                placeholder="성함을 입력해주세요"
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
                placeholder="소속된 학교를 입력해주세요"
              />
            </>
          )}
          <button className={cx('button')}>회원가입</button>
        </form>
      </div>
    </FullScreen>
  )
}

export default SignUpPage
