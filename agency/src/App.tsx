import * as React from "react";

import {
  RootErrorBoundary,
  ProjectErrorBoundary,
  ProjectLoader,
} from "./components/route/routes";

import { Outlet, Route, Routes, useNavigation } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Work from "./components/Work";
import Services from "./components/Services";
import Contact from "./components/Contact";
import GlobalSpinner from "./components/loading/GlobalSpinner";

const App: React.FC = () => {

  const navigation = useNavigation();
  
  return (
    <>
      {navigation.state === "loading" && <GlobalSpinner />}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            path=""
            element={<Outlet />}
            errorElement={<RootErrorBoundary />}
          >
            <Route
              path="/work/*"
              element={<Work />}
              errorElement={<ProjectErrorBoundary />}
              loader={ProjectLoader}
            />
            <Route path="/services/*" element={<Services />} />
            <Route path="/contact/*" element={<Contact />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
