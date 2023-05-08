import { useState } from 'react'

const useThrowAsyncError = () => {
  const [, setState] = useState()

  return (error: Error) => {
    setState(() => {
      throw error
    })
  }
}

export default useThrowAsyncError
