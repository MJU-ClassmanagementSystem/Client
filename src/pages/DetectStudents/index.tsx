/* eslint-disable jsx-a11y/media-has-caption */
import classNames from 'classnames/bind'
import { useRef } from 'react'
import FullScreen from 'src/components/layout/FullScreen'
import useDetectFace from 'src/hooks/useDetectFace'

import styles from './registerStudents.module.scss'

const cx = classNames.bind(styles)

const DetectStudents = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useDetectFace(videoRef, canvasRef)

  return (
    <FullScreen className={cx('registerStudents')}>
      <h1 className={cx('title')}>카메라를 바라보세요.</h1>
      <div className={cx('videoWrapper')}>
        <video className={cx('video')} width={900} height={600} autoPlay ref={videoRef} />
        <canvas className={cx('canvas')} ref={canvasRef} />
      </div>
    </FullScreen>
  )
}

export default DetectStudents
