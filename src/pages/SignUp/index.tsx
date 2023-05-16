import { DevTool } from '@hookform/devtools'
import classNames from 'classnames/bind'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import Dropdown from 'src/components/features/Dropdown'
import FullScreen from 'src/components/layout/FullScreen'
import useThrowAsyncError from 'src/hooks/useThrowAsyncError'
import classManagement from 'src/service/classManagement'
import { SignupFormData } from 'src/types/reactHookForm'

import styles from './signUp.module.scss'

const cx = classNames.bind(styles)

const SignUpPage = () => {
  const { register, control, handleSubmit } = useForm<SignupFormData>()
  const [selectedItem, setSelectedItem] = useState('선생님')
  const throwAsyncError = useThrowAsyncError()
  const navigate = useNavigate()

  const isTeacher = selectedItem === '선생님'
  const isParent = !isTeacher

  const onSubmit = handleSubmit(async ({ id, name, password, school, studentId }) => {
    if (!id || !password) return
    try {
      switch (selectedItem) {
        case '선생님':
          if (!name || !school) return
          await classManagement.signupTeacher(id, password, name, school)
          navigate('/signIn')
          return
        case '학부모':
          if (!studentId) return
          await classManagement.signupParent(id, password, studentId)
          navigate('/signIn')
          return
        default:
          return
      }
    } catch (error) {
      if (error instanceof Error) throwAsyncError(error)
      console.error(error)
    }
  })

  return (
    <FullScreen className={cx('signUp')}>
      <div className={cx('photo')} />
      <div className={cx('formContainer')}>
        <form className={cx('form')} onSubmit={onSubmit}>
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
            {...register('id')}
          />
          <label className={cx('label')} htmlFor="password">
            password
          </label>
          <input
            className={cx('input')}
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register('password')}
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
                {...register('studentId')}
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
                {...register('name')}
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
                {...register('school')}
              />
            </>
          )}
          <button className={cx('button')} type="submit">
            회원가입
          </button>
        </form>
      </div>
      <DevTool control={control} />
    </FullScreen>
  )
}

export default SignUpPage
