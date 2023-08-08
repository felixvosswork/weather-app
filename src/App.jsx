import "./App.css";
import Heading from "./components/Heading.jsx";
import Overview from "./components/Overview";
import Search from "./components/Search";
import Forecast from "./components/Forecast";
import { useState } from "react";

function App() {
  const [result, setResult] = useState({});
  return (
    <div className="container mx-auto py-20 px-4">
      <Heading />
      <Search setResult={setResult} />
      <Overview result={result} />
      <Forecast />
    </div>
  );
}

export default App;
