import { RefObject, useEffect, useRef } from 'react'

export const captureFrame = (
  videoRef: RefObject<HTMLVideoElement>,
  canvas: HTMLCanvasElement,
): number | undefined => {
  if (!videoRef.current || !canvas) return
  const context = canvas.getContext('2d')
  context?.drawImage(videoRef.current, 0, 0)
  const imageData = canvas.toDataURL('image/jpeg')
  console.log(imageData)
  return requestAnimationFrame(() => captureFrame(videoRef, canvas))
}

const startVideo = async (videoRef: RefObject<HTMLVideoElement>) => {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true })
  if (!videoRef || !videoRef.current || videoRef.current.srcObject) return
  videoRef.current.srcObject = stream
  videoRef.current.play()
}

const useWebcam = (videoRef: RefObject<HTMLVideoElement>) => {
  const canvasRef = useRef<HTMLCanvasElement>(document.createElement('canvas'))

  useEffect(() => {
    startVideo(videoRef)

    captureFrame(videoRef, canvasRef.current)
  }, [videoRef])
}

export default useWebcam
