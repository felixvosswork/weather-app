function Overview(props) {
  const {
    city,
    country,
    temperatur,
    tempMax,
    tempMin,
    feucht,
    windspeed,
    weather,
    time,
    sunrise,
    sunset,
  } = props.weather;
  return (
    <>
      <div className="container pt-20">
        <div className="w-full name">
          <h1 className="text-7xl font-semibold mb-5">
            {city}, {country}
          </h1>
          <h2 className="text-2xl">
            {new Date(`${time}` * 1000).toLocaleDateString()},
            {new Date(`${time}` * 1000).toISOString().slice(11, -8)} Uhr
          </h2>
        </div>
        <div className="flex mt-10 mb-10 weather-now">
          <div className="w-1/3">
            <div className="flex">
              <span className="icon me-5">
                <img
                  className="w-full h-auto"
                  src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
                  alt=""
                />
              </span>
              <h2 className="text-9xl">{temperatur.toFixed()}°</h2>
              <h3 className="text-2xl self-end mt-3">
                {weather[0].description}
              </h3>
            </div>
          </div>
          <div className="w-2/3">
            <div className="grid gap-4 grid-cols-3 h-full bg-violet-300 p-5 text-zinc-800">
              <div>
                <p>{tempMax.toFixed()}°</p>
                <p>Höchste Temperatur</p>
              </div>
              <div>
                <p>{tempMin.toFixed()}°</p>
                <p>Niedriegste Temperatur</p>
              </div>
              <div>
                <p>{windspeed} mp/h</p>
                <p>Windgeschwindigkeit</p>
              </div>
              <div>
                <p>{feucht.toFixed()}%</p>
                <p>Feuchtigkeit</p>
              </div>
              <div>
                <p>
                  {new Date(`${sunrise}` * 1000).toISOString().slice(11, -8)}
                </p>
                <p>Sonnenaufgang</p>
              </div>
              <div>
                <p>
                  {new Date(`${sunset}` * 1000).toISOString().slice(11, -8)}
                </p>
                <p>Sonnenuntergang</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Overview;
