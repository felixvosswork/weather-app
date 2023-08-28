import "./App.css";
import Heading from "./components/Heading.jsx";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  return (
    <div className="container mx-auto pt-10 px-4">
      <Heading />
      <Search />
    </div>
  );
}

export default App;
