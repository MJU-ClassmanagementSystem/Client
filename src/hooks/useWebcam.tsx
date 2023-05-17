import { RefObject, useCallback, useEffect, useRef, useState } from 'react'
import { captureFrame, startVideo } from 'src/utils/video'

import useWebSocket from './useWebSocket'

const useWebcam = (
  videoRef: RefObject<HTMLVideoElement>,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const canvasRef = useRef<HTMLCanvasElement>(document.createElement('canvas'))
  const animationFrameId = useRef<number>()
  const [isCapturing, setIsCapturing] = useState(false)
  const socket = useWebSocket()

  const handleImageData = useCallback(
    (imageData: string) => {
      if (socket.readyState === socket.OPEN) {
        socket.send(imageData)
      }
    },
    [socket],
  )

  useEffect(() => {
    startVideo(videoRef, canvasRef)

    if (isCapturing) {
      animationFrameId.current = captureFrame(
        animationFrameId,
        videoRef,
        canvasRef.current,
        isCapturing,
        handleImageData,
      )
    } else {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
    }

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
    }
  }, [handleImageData, isCapturing, videoRef])

  return [isCapturing, setIsCapturing]
}

export default useWebcam
