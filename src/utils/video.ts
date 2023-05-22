import { MutableRefObject, RefObject } from 'react'

// 프레임을 이미지로 저장하는 함수
export const captureFrame = (
  animationIdRef: MutableRefObject<number | undefined>,
  videoRef: RefObject<HTMLVideoElement>,
  canvas: HTMLCanvasElement,
  isCapturing: boolean,
  handleImageData: (imageData: string) => void,
): number | undefined => {
  if (!isCapturing || !videoRef.current || !canvas) return
  const context = canvas.getContext('2d')
  context?.drawImage(videoRef.current, 0, 0)
  const imageData = canvas.toDataURL('image/jpeg')
  handleImageData(imageData)
  animationIdRef.current = requestAnimationFrame(() =>
    captureFrame(animationIdRef, videoRef, canvas, isCapturing, handleImageData),
  )
}

// 브라우저에 비디오 화면을 그리는 함수
export const startVideo = async (videoRef: RefObject<HTMLVideoElement>) => {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true })
  if (!videoRef || !videoRef.current || videoRef.current.srcObject) return
  videoRef.current.srcObject = stream
  videoRef.current.play()
}

// 비디오의 크기에 따른 Canvas의 크기를 설정하는 함수
export const setCanvas = (
  videoRef: RefObject<HTMLVideoElement>,
  canvasRef: RefObject<HTMLCanvasElement>,
) => {
  videoRef.current?.addEventListener('loadedmetadata', () => {
    if (!canvasRef.current || !videoRef.current) return
    canvasRef.current.width = videoRef.current.videoWidth
    canvasRef.current.height = videoRef.current.videoHeight
  })
}
