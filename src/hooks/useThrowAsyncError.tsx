import { useCallback, useState } from 'react'

const useThrowAsyncError = () => {
  const [, setState] = useState()

  const throwErrow = useCallback((error: Error) => {
    setState(() => {
      throw error
    })
  }, [])

  return throwErrow
}

export default useThrowAsyncError
