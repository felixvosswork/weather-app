import axios from "axios";
import { useState } from "react";
import Overview from "./Overview";
import Forecast from "./Forecast";

function Search() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  const urlOverview = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=de&units=metric&appid=9fd09dd817f5adb0e6dce7a06f1d1996`;
  const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&lang=de&units=metric&appid=9fd09dd817f5adb0e6dce7a06f1d1996`;

  const searchLocation = (e) => {
    e.preventDefault();
    axios
      .get(urlOverview)
      .then((response) => {
        setIsError(false);
        const {
          name,
          id,
          dt,
          main: { temp, temp_max, temp_min, humidity },
          sys: { country, sunrise, sunset },
          weather,
          wind: { speed },
        } = response.data;
        setWeatherData({
          city: name,
          country: country,
          temperatur: temp,
          tempMax: temp_max,
          tempMin: temp_min,
          feucht: humidity,
          windspeed: speed,
          weather: weather,
          id: id,
          sunrise: sunrise,
          sunset: sunset,
          time: dt,
        });
      })
      .catch((error) => {
        setIsError(true);
        console.log("fehler", error);
      });
    axios
      .get(urlForecast)
      .then((response) => {
        setIsError(false);
        const { list } = response.data;
        const shortendList = list.splice(1, 10).map((item) => {
          return {
            foreTemp: item.main.temp,
            foreIcon: item.weather[0].icon,
            time: item.dt,
          };
        });
        setForecastData(shortendList);
      })
      .catch((error) => {
        setIsError(true);
        console.log("fehler", error);
      });
  };

  const resetData = () => {
    setWeatherData("");
    setForecastData("");
  };

  return (
    <>
      <div className="searchbar">
        <form className="flex gap-2" onSubmit={searchLocation}>
          <input
            type="text"
            placeholder="Stadt eingeben..."
            name="search"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            className="text-zinc-800 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
          <button
            className="px-4 py-1 text-zinc-800 rounded-md shadow-sm bg-white"
            name="submit"
            type="submit"
          >
            suchen
          </button>
          <button
            className="px-4 py-1 text-zinc-800 rounded-md shadow-sm bg-white"
            onClick={resetData}
          >
            zurücksetzten
          </button>
        </form>
      </div>
      <div className="btn-group mt-5 grid gap-4 grid-cols-4">
        <button
          onClick={(e) => {
            setLocation(e.target.value);
          }}
          value="Neubrandenburg"
          className="px-4 py-1 text-zinc-800 rounded-md shadow-sm bg-violet-300"
        >
          Neubrandenburg
        </button>
        <button
          onClick={(e) => {
            setLocation(e.target.value);
          }}
          value="Greifswald"
          className="px-4 py-1 text-zinc-800 rounded-md shadow-sm bg-violet-300"
        >
          Greifswald
        </button>
        <button
          onClick={(e) => {
            setLocation(e.target.value);
          }}
          value="Rostock"
          className="px-4 py-1 text-zinc-800 rounded-md shadow-sm bg-violet-300"
        >
          Rostock
        </button>
        <button
          onClick={(e) => {
            setLocation(e.target.value);
          }}
          value="Berlin"
          className="px-4 py-1 text-zinc-800 rounded-md shadow-sm bg-violet-300"
        >
          Berlin
        </button>
      </div>
      {isError ? (
        <h2 className="text-7xl text-center pt-20">
          Die Stadt gibt es nicht oder es wurde keine eingegeben.
        </h2>
      ) : (
        weatherData && <Overview weather={weatherData} />
      )}
      {isError ? "" : forecastData && <Forecast forecast={forecastData} />}
    </>
  );
}
export default Search;
