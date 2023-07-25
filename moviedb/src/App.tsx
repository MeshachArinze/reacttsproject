
import { Routes, Route } from "react-router-dom";

import Home from "./home";
import Movie from "./single-movie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies/:id" element={<Movie />} />
    </Routes>
  );
}
export default App;
