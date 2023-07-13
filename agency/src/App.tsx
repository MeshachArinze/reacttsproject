
import {
  RootErrorBoundary,
  // ProjectErrorBoundary,
  ProjectLoader,
} from "./components/route/routes";

import { Outlet, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Work from "./components/Work";
import Services from "./components/Services";
import Contact from "./components/Contact";

const App = () => {

  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            path=""
            element={<Outlet />}
            errorElement={<RootErrorBoundary />}
          />
          <Route path="/work" element={<Work />} loader={ProjectLoader} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
