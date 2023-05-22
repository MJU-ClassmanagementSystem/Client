import { RefObject, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useRecoilState } from 'recoil'
import { scanState } from 'src/recoil/atom'
import { detectFace } from 'src/utils/recognition'
import { startVideo } from 'src/utils/video'

const useScanFace = (
  videoRef: RefObject<HTMLVideoElement>,
  canvas: RefObject<HTMLCanvasElement>,
) => {
  const [scanValue, setScanValue] = useRecoilState(scanState)

  useEffect(() => {
    startVideo(videoRef)
  }, [videoRef])

  useEffect(() => {
    if (!scanValue.isScanning) return
    toast('카메라를 봐주세요', { type: 'info' })
    detectFace(videoRef, canvas, scanValue.studentId, setScanValue)
  }, [canvas, scanValue.isScanning, scanValue.studentId, setScanValue, videoRef])
}

export default useScanFace
