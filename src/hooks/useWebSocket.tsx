import { useEffect, useMemo } from 'react'
import { toast } from 'react-toastify'

const useWebSocket = () => {
  const websocket = useMemo(() => {
    return new WebSocket('ws://localhost:3300')
  }, [])

  useEffect(() => {
    websocket.addEventListener('open', () =>
      toast('websocket is connected!', { type: 'success' }),
    )
    websocket.addEventListener('close', () =>
      toast('websocket is disconnected...', { type: 'warning' }),
    )
    websocket.addEventListener('message', (event: MessageEvent) =>
      toast(event.data, { type: 'info' }),
    )

    return () => {
      websocket.close()
    }
  }, [websocket])

  return websocket
}

export default useWebSocket
