import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./components/Home";
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
        </Routes>
      </Router>
      {/* <PhotoGallery /> */}
    </>
  );
}

export default App;
