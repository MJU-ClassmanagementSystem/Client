import classNames from 'classnames/bind'
import FullScreen from 'src/components/layout/FullScreen'

import styles from './registerStudents.module.scss'

const cx = classNames.bind(styles)

//const video = document.getElementById('webcam')

const RegisterStudents = () => {
  return (
    <FullScreen className={cx('registerStudents')}>
      <h1 className={cx('title')}>카메라를 바라보세요.</h1>
      <div className={cx('camera')} />
      <form className={cx('form')}>
        <div className={cx('inputWrap')}>
          <label className={cx('label')} htmlFor="studentId">
            학번
          </label>
          <input className={cx('input')} id="studentId" type="text" />
          <label className={cx('label')} htmlFor="studentName">
            이름
          </label>
          <input className={cx('input')} id="studentName" type="text" />

          <button className={cx('button')} type="submit">
            등록
          </button>
        </div>
      </form>
    </FullScreen>
  )
}

export default RegisterStudents
