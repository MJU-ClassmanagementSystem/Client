import axios from 'axios'
import {
  detectAllFaces,
  detectSingleFace,
  draw,
  FaceMatcher,
  LabeledFaceDescriptors,
  matchDimensions,
  nets,
  resizeResults,
} from 'face-api.js'
import { RefObject, useEffect } from 'react'
import { startVideo } from 'src/utils/video'

type Response = { studentId: string; images: string[] }[]

const useDetectFace = (
  videoRef: RefObject<HTMLVideoElement>,
  canvasRef: RefObject<HTMLCanvasElement>,
) => {
  useEffect(() => {
    startVideo(videoRef)
  }, [videoRef])

  useEffect(() => {
    ;(async () => {
      await Promise.all([
        nets.ssdMobilenetv1.loadFromUri('../models'),
        nets.faceLandmark68Net.loadFromUri('../models'),
        nets.faceRecognitionNet.loadFromUri('../models'),
        nets.ageGenderNet.loadFromUri('../models'),
        nets.faceExpressionNet.loadFromUri('../models'),
      ])

      const { data } = await axios.get<Response>('http://localhost:3300/api/get-images')

      const labeledFaceDescriptors = await getLabeldFaceDescriptors(data)
      const faceMatcher = new FaceMatcher(labeledFaceDescriptors, 0.9)

      if (!canvasRef.current || !videoRef.current) return
      matchDimensions(canvasRef.current, {
        width: videoRef.current.width,
        height: videoRef.current.height,
      })

      setInterval(async () => {
        if (!videoRef.current || !canvasRef.current) return
        const detections = await detectAllFaces(videoRef.current)
          .withFaceLandmarks()
          .withFaceExpressions()
          .withAgeAndGender()
          .withFaceDescriptors()

        const resizedDetections = resizeResults(detections, {
          width: videoRef.current.width,
          height: videoRef.current.height,
        })

        canvasRef.current
          .getContext('2d')
          ?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

        const results = resizedDetections.map((d) => {
          return faceMatcher.findBestMatch(d.descriptor)
        })

        results.forEach((result, i) => {
          const { box } = resizedDetections[i].detection

          const drawBox = new draw.DrawBox(box, {
            label: result.label,
          })

          if (canvasRef.current) {
            drawBox.draw(canvasRef.current)
            draw.drawFaceExpressions(canvasRef.current, resizedDetections[i])
          }
        })
      }, 100)
    })()
  }, [canvasRef, videoRef])
}

export default useDetectFace

const getLabeldFaceDescriptors = (data: Response) => {
  return Promise.all(
    data.map(async (item) => {
      const descriptions: Float32Array[] = []
      for (const image of item.images) {
        const img = new Image()
        img.src = image

        img.onload = async () => {
          const detections = await detectSingleFace(img)
            .withFaceLandmarks()
            .withFaceDescriptor()

          if (detections) {
            descriptions.push(detections.descriptor)
          }
        }
      }
      return new LabeledFaceDescriptors(item.studentId, descriptions)
    }),
  )
}
