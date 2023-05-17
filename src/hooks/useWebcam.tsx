import { MutableRefObject, RefObject, useEffect, useRef, useState } from 'react'

export const captureFrame = (
  animationIdRef: MutableRefObject<number | undefined>,
  videoRef: RefObject<HTMLVideoElement>,
  canvas: HTMLCanvasElement,
  isCapturing: boolean,
): number | undefined => {
  if (!isCapturing || !videoRef.current || !canvas) return
  const context = canvas.getContext('2d')
  context?.drawImage(videoRef.current, 0, 0)
  const imageData = canvas.toDataURL('image/jpeg')
  console.log(imageData)
  animationIdRef.current = requestAnimationFrame(() =>
    captureFrame(animationIdRef, videoRef, canvas, isCapturing),
  )
}

// 브라우저에 비디오 화면을 그리는 함수
const startVideo = async (videoRef: RefObject<HTMLVideoElement>) => {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true })
  if (!videoRef || !videoRef.current || videoRef.current.srcObject) return
  videoRef.current.srcObject = stream
  videoRef.current.play()
}

const useWebcam = (videoRef: RefObject<HTMLVideoElement>) => {
  const canvasRef = useRef<HTMLCanvasElement>(document.createElement('canvas'))
  const animationFrameId = useRef<number>()
  const [isCapturing, setIsCapturing] = useState(false)

  useEffect(() => {
    startVideo(videoRef)

    if (isCapturing) {
      animationFrameId.current = captureFrame(
        animationFrameId,
        videoRef,
        canvasRef.current,
        isCapturing,
      )
    } else {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
    }

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
    }
  }, [isCapturing, videoRef])

  return { setIsCapturing }
}

export default useWebcam
