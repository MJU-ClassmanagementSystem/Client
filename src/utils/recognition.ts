import axios from 'axios'
import { detectSingleFace, nets, resizeResults } from 'face-api.js'
import { drawDetections } from 'face-api.js/build/commonjs/draw'
import { RefObject } from 'react'
import { toast } from 'react-toastify'
import { SetterOrUpdater } from 'recoil'
import { Scan } from 'src/recoil/atom'

export const detectFace = async (
  videoRef: RefObject<HTMLVideoElement>,
  canvasRef: RefObject<HTMLCanvasElement>,
  studentId: string,
  onScanFinish: SetterOrUpdater<Scan>,
) => {
  await Promise.all([
    nets.ssdMobilenetv1.loadFromUri('../models'),
    nets.faceLandmark68Net.loadFromUri('../models'),
    nets.faceRecognitionNet.loadFromUri('../models'),
  ])
  if (!videoRef.current || !canvasRef.current) return
  const video = videoRef.current
  canvasRef.current.width = video.width
  canvasRef.current.height = video.height

  let index = 0
  const timer = setInterval(async () => {
    if (!canvasRef.current) return
    const detections = await detectSingleFace(video)

    if (detections && index < 10) {
      const image = captureImage(video)
      sendImagetoServer(image, studentId, index)
      index++
    }

    if (index === 10) {
      toast(`학생번호 ${studentId}의 등록이 완료되었습니다.`, { type: 'info' })
      canvasRef.current
        .getContext('2d')
        ?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      clearInterval(timer)
      onScanFinish({ isScanning: false, studentId: '', name: '' })
      return
    }

    const resizedDetection = resizeResults(detections, {
      width: video.width,
      height: video.height,
    })

    if (!resizedDetection) return

    canvasRef.current
      .getContext('2d')
      ?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    drawDetections(canvasRef.current, resizedDetection.box)
  }, 100)
}

const captureImage = (video: HTMLVideoElement) => {
  const canvas = document.createElement('canvas')
  canvas.width = video.width
  canvas.height = video.height

  canvas.getContext('2d')?.drawImage(video, 0, 0)

  const imageData = canvas.toDataURL('image/jpeg')

  return imageData
}

const sendImagetoServer = async (image: string, studentId: string, index: number) => {
  await axios.post('http://localhost:3300/api/save-image', {
    image: image,
    studentId,
    index,
  })
}
