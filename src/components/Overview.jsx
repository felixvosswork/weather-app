function Overview({ result }) {
  const dateConstructor = () => {
    return new Date(result.dt * 1000);
  };
  return (
    <>
      {result.name ? (
        <div className="container pt-10">
          <div className="w-full name">
            <h1 className="text-7xl font-semibold mb-5">
              {result.name}, {result.sys.country}
            </h1>
            <h2 className="text-2xl">{dateConstructor}</h2>
          </div>
          <div className="flex mt-10 mb-10 weather-now">
            <div className="w-1/3">
              <div className="flex">
                <span className="icon me-5">
                  <img
                    className="w-full h-auto"
                    src={`http://openweathermap.org/img/wn/${result.weather[0].icon}.png`}
                    alt=""
                  />
                </span>
                <h2 className="text-9xl">{result.main.temp.toFixed()}°</h2>
                <h3 className="text-2xl self-end mt-3">
                  {result.weather[0].description}
                </h3>
              </div>
            </div>
            <div className="w-2/3">
              <div className="grid gap-4 grid-cols-3 h-full bg-violet-300 p-5 text-zinc-800">
                <div>
                  <p>{result.main.temp_max.toFixed()}°</p>
                  <p>Höchste Temperatur</p>
                </div>
                <div>
                  <p>{result.main.temp_min.toFixed()}°</p>
                  <p>Niedriegste Temperatur</p>
                </div>
                <div>
                  <p>{result.wind.speed} mp/h</p>
                  <p>Windgeschwindigkeit</p>
                </div>
                <div>
                  <p>{result.main.humidity.toFixed()}%</p>
                  <p>Feuchtigkeit</p>
                </div>
                <div>
                  <p>{result.main.temp.toFixed()}°</p>
                  <p>Sonnenaufgang</p>
                </div>
                <div>
                  <p>{result.main.temp.toFixed()}°</p>
                  <p>Sonnenuntergang</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : undefined}
    </>
  );
}
export default Overview;
