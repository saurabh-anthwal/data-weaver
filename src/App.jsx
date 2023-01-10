import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/products/Product";
import Sidebar from "./components/sidebar/Sidebar";
import LayOut from "./components/ui/LayOut";

function App() {
  const [togle, setTogle] = useState(true);
  function handleTogle() {
    setTogle(!togle);
  }
  return (
    <div className="App">
      <Navbar togle={togle} handleTogle={handleTogle} />
      <div>
        <Sidebar togle={togle} handleTogle={handleTogle} />
        <LayOut>
          <Product />
        </LayOut>
      </div>
    </div>
  );
}

export default App;
