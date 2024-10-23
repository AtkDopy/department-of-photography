import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Atmos from "./components/Atmos";
import Pearl from "./components/Pearl";
import Arena from "./components/Arena";
import Events from "./components/Events";
import PhotoGallery from "./components/PhotoGallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photogallery" element={<PhotoGallery />} />
          <Route path="/atmos" element={<Atmos />} />
          <Route path="/pearl" element={<Pearl />} />
          <Route path="/arena" element={<Arena />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
      {/* <PhotoGallery /> */}
    </>
  );
}

export default App;
