import { ReactNode } from 'react'
import ReactDOM from 'react-dom'

interface PortalProps {
  children: ReactNode
}

const Portal = ({ children }: PortalProps) => {
  const container = document.getElementById('modal') as HTMLElement

  return ReactDOM.createPortal(children, container)
}

export default Portal
