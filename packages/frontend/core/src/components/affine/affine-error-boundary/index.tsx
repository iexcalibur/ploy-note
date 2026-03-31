import {
  Component,
  type ErrorInfo,
  type FC,
  type PropsWithChildren,
} from 'react';

import { AffineErrorFallback } from './affine-error-fallback';

export { type FallbackProps } from './error-basic/fallback-creator';

export interface AffineErrorBoundaryProps extends PropsWithChildren {
  height?: number | string;
  className?: string;
}

interface ErrorBoundaryState {
  error: Error | null;
}

class ReactErrorBoundary extends Component<
  PropsWithChildren<{
    fallbackRender: (props: {
      error: Error;
      resetError: () => void;
    }) => React.ReactNode;
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
  }>,
  ErrorBoundaryState
> {
  constructor(props: any) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.props.onError?.(error, errorInfo);
  }

  resetError = () => {
    this.setState({ error: null });
  };

  render() {
    if (this.state.error) {
      return this.props.fallbackRender({
        error: this.state.error,
        resetError: this.resetError,
      });
    }
    return this.props.children;
  }
}

/**
 * TODO(@eyhn): Unify with SWRErrorBoundary
 */
export const AffineErrorBoundary: FC<AffineErrorBoundaryProps> = props => {
  return (
    <ReactErrorBoundary
      fallbackRender={fallbackProps => (
        <AffineErrorFallback
          {...fallbackProps}
          height={props.height}
          className={props.className}
        />
      )}
      onError={(error, errorInfo) => {
        console.error('Uncaught error:', error, errorInfo.componentStack);
      }}
    >
      {props.children}
    </ReactErrorBoundary>
  );
};
