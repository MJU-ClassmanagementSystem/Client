import { RefObject, useEffect } from 'react'

export const captureFrame = (
  videoRef: RefObject<HTMLVideoElement>,
  canvas: HTMLCanvasElement,
  isCapturing: boolean,
): number | undefined => {
  console.log(isCapturing)
  if (!isCapturing || !videoRef.current || !canvas) return
  const context = canvas.getContext('2d')
  context?.drawImage(videoRef.current, 0, 0)
  const imageData = canvas.toDataURL('image/jpeg')
  console.log(imageData)
  return requestAnimationFrame(() => captureFrame(videoRef, canvas, isCapturing))
}

const startVideo = async (videoRef: RefObject<HTMLVideoElement>) => {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true })
  if (!videoRef || !videoRef.current || videoRef.current.srcObject) return
  videoRef.current.srcObject = stream
  videoRef.current.play()
}

const useWebcam = (videoRef: RefObject<HTMLVideoElement>) => {
  useEffect(() => {
    startVideo(videoRef)
  }, [videoRef])
}

export default useWebcam
