/* eslint-disable jsx-a11y/media-has-caption */
import classNames from 'classnames/bind'
import { useEffect, useRef } from 'react'
import FullScreen from 'src/components/layout/FullScreen'
import { startVideo } from 'src/utils/video'

import styles from './registerStudents.module.scss'

const cx = classNames.bind(styles)

//const video = document.getElementById('webcam')

const RegisterStudents = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    startVideo(videoRef)
  }, [])

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

          <button className={cx('button')} type="submit">
            등록
          </button>
        </div>
      </form>
    </FullScreen>
  )
}

export default RegisterStudents
