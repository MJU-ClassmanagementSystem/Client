import 'react-toastify/dist/ReactToastify.css'

import React, { PropsWithChildren, ReactNode } from 'react'
import { toast } from 'react-toastify'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
  message: string
}

class ErrorBoundary extends React.Component<PropsWithChildren, State> {
  constructor(props: Props) {
    super(props)

    this.state = { hasError: false, message: '' }
  }

  componentDidCatch(error: Error) {
    toast.error(`${error.message}`)
  }

  render() {
    return this.props.children
  }
}

export default ErrorBoundary
