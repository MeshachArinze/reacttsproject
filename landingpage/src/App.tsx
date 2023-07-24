import { Route, Routes } from "react-router-dom";

import Hero from "./components/hero";
import Cta from "./components/cta";
import Features from "./components/featutes";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Testimonials from "./components/testimonials";
import "./App.css";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Navbar />}>
          
          <Route path="/" element={<Hero />} />
          <Route path="/" element={<Features />} />
          <Route path="/" element={<Testimonials />} />
          <Route path="/" element={<Cta />} />
          <Route path="/" element={<Footer />} />
        </Route>
      </Routes>
  );
}

export default App;
