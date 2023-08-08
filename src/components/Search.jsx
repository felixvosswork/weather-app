import axios from "axios";
import { useState } from "react";

function Search({ setResult }) {
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=de&units=imperial&appid=9fd09dd817f5adb0e6dce7a06f1d1996`;

  const searchLocation = (e) => {
    e.preventDefault();
    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
      setResult(result);
    });
  };

  return (
    <form onSubmit={searchLocation}>
      <input
        type="text"
        placeholder="Stadt eingeben..."
        name="search"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        className="text-zinc-800 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      />
      <button name="submit" type="submit">
        suchen
      </button>
    </form>
  );
}
export default Search;
