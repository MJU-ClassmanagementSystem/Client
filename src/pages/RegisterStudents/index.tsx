/* eslint-disable jsx-a11y/media-has-caption */
import classNames from 'classnames/bind'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import FullScreen from 'src/components/layout/FullScreen'
import useScanFace from 'src/hooks/useScanFace'
import { scanState } from 'src/recoil/atom'

import styles from './registerStudents.module.scss'

const cx = classNames.bind(styles)

const RegisterStudents = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [scanInfo, setScanInfoState] = useRecoilState(scanState)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useScanFace(videoRef, canvasRef)

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setScanInfoState({ ...scanInfo, name: e.currentTarget.value })

  const handleStudentIdChange = (e: ChangeEvent<HTMLInputElement>) =>
    setScanInfoState({ ...scanInfo, studentId: e.currentTarget.value })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!scanInfo.name || !scanInfo.studentId) return
    setScanInfoState({ ...scanInfo, isScanning: true })
  }

  return (
    <FullScreen className={cx('registerStudents')}>
      <h1 className={cx('title')}>카메라를 바라보세요.</h1>
      <div className={cx('videoWrapper')}>
        <video className={cx('video')} width={900} height={600} autoPlay ref={videoRef} />
        <canvas className={cx('canvas')} ref={canvasRef} />
      </div>
      <form className={cx('form')} onSubmit={handleSubmit}>
        <div className={cx('inputWrap')}>
          <label className={cx('label')} htmlFor="studentId">
            학번
          </label>
          <input
            className={cx('input')}
            id="studentId"
            type="text"
            value={scanInfo.studentId}
            onChange={handleStudentIdChange}
          />
          <label className={cx('label')} htmlFor="studentName">
            이름
          </label>
          <input
            className={cx('input')}
            id="studentName"
            type="text"
            value={scanInfo.name}
            onChange={handleNameChange}
          />
          <button className={cx('button')} type="submit">
            정지
          </button>
        </div>
      </form>
    </FullScreen>
  )
}

export default RegisterStudents
