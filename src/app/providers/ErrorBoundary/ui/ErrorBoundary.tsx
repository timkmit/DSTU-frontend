import { getRouteError } from "@/shared/consts/router";
import { PageLoader } from "@/widgets/PageLoader";
import { Component, ErrorInfo, ReactNode, Suspense } from "react";
import { Navigate } from "react-router-dom";

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		console.error(error.message);
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		console.log(error, info);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;

		if (hasError) {
			return (
				<Suspense fallback={<PageLoader />}>
					<Navigate to={getRouteError()} />
				</Suspense>
			);
		}

		return children;
	}
}
