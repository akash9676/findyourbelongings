import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/Navbar" element={<Navbar  />}/>
        <Route path="/Footer" element={<Footer />}/>
        <Route path="/About" element={<About  />}/>
      </Routes>
    </>
  );
}




