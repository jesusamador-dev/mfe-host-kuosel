import React, { ReactNode, useState } from 'react';

interface SafeViewProps {
  children: ReactNode;
  title?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<SafeViewProps, ErrorBoundaryState> {
  constructor(props: SafeViewProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    // Actualiza el estado para que el siguiente renderizado muestre la UI alternativa
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.error("Error capturado en ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Renderiza cualquier UI alternativa en caso de error
      return <div>{this.props.title || "Algo salió mal."}</div>;
    }

    return this.props.children;
  }
}

const SafeView: React.FC<SafeViewProps> = ({ children, title }) => {
  return (
    <ErrorBoundary title={title}>
      {children}
    </ErrorBoundary>
  );
};

export default SafeView;
