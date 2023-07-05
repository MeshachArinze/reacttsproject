import { ReactNode } from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";




export default function RootBoundary() {
  const error = useRouteError() as Error;

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>This page do not exist!</div>;
    }

    if (error.status === 401) {
      return <div>You are not authorized to see this</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }

    if (error.status === 418) {
      return <div>🫖</div>;
    }
  }

  return <div>children</div>;
}; 


