import type { FunctionComponent, ReactNode } from 'react'
import { Component } from 'react'

type Props = {
  fallback: (error: unknown) => ReactNode
  children: ReactNode
}

// eslint-disable-next-line @eslint-react/no-class-component
class ErrorBoundaryClass extends Component<Props, { error?: unknown }> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  static getDerivedStateFromError(error: unknown) {
    return { error }
  }

  render() {
    if ('error' in this.state) {
      return this.props.fallback(this.state.error)
    }
    return this.props.children
  }
}

export const ErrorBoundary = ErrorBoundaryClass as unknown as FunctionComponent<Props>
