/* eslint-disable jsx-a11y/media-has-caption */
import classNames from 'classnames/bind'
import { useRef } from 'react'
import FullScreen from 'src/components/layout/FullScreen'
import useWebcam from 'src/hooks/useWebcam'

import styles from './registerStudents.module.scss'

const cx = classNames.bind(styles)

const RegisterStudents = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isCapturing, setIsCapturing] = useWebcam(videoRef)

  return (
    <FullScreen className={cx('registerStudents')}>
      <h1 className={cx('title')}>카메라를 바라보세요.</h1>
      <video className={cx('camera')} autoPlay ref={videoRef} />
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

          <button
            className={cx('button')}
            type="button"
            onClick={() => {
              setIsCapturing((prev) => !prev)
            }}
          >
            {isCapturing ? '정지' : '등록'}
          </button>
        </div>
      </form>
    </FullScreen>
  )
}

export default RegisterStudents
