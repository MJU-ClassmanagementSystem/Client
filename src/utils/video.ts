import { RefObject } from 'react'

export const startVideo = async (videoRef: RefObject<HTMLVideoElement>) => {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true })
  if (videoRef && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = stream
  }
}
