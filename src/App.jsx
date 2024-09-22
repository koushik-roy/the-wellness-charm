import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Banner from "./components/Banner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Banner/>
      <NavBar />
      <Home />


    </>
  );
}

export default App;
