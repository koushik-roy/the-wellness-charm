import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Banner from "./components/Banner";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Banner />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
