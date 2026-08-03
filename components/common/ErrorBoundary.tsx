"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { FiAlertTriangle, FiRefreshCw } from "react-icons/fi";
import { Button } from "./Buttons";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="my-12 flex flex-col items-center justify-center rounded-2xl border border-reef-burgundy/20 bg-rose-50/50 p-8 text-center sm:p-12">
          <div className="rounded-full bg-rose-100 p-4 text-reef-burgundy">
            <FiAlertTriangle className="h-8 w-8" />
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-bold text-reef-charcoal">
            Something went wrong
          </h2>
          <p className="mt-2 max-w-md text-xs leading-relaxed text-reef-charcoal/70">
            {this.state.error?.message || "An unexpected error occurred. Please try again."}
          </p>
          <div className="mt-6">
            <Button
              variant="secondary"
              size="sm"
              icon={<FiRefreshCw className="h-4 w-4" />}
              onClick={this.handleReset}
            >
              Try Again
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
