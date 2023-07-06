"use client"

import { Suspense } from "react";
import DashboardLayout from "./layout";
import Template from "../template";
import RootBoundary from "./error-boundary";
import Error from "./error";
import Loading from "./loading";
import NotFound from "../blog/not-found";
import Home from "../page";


type customAttributes = { children?: Element, fallback: Element } 



const Posts = ({children, fallback}: customAttributes) => {
    const errorElement = <Error />;
    const notFound = <NotFound />;
  return (
    <DashboardLayout>
      <Template>
        <RootBoundary
          {...({
            children: Element,
            fallback: errorElement,
          } as any)}
        >
          <Suspense fallback={<Loading />}>
            <RootBoundary
              {...({
                children: Element,
                fallback: notFound,
              } as any)}
            >
              <Home />
            </RootBoundary>
          </Suspense>
        </RootBoundary>
      </Template>
    </DashboardLayout>
  );
}

export default Posts
