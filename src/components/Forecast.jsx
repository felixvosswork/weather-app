function Forecast(props) {
  const forecasted = props.forecast;
  return (
    <div className="container mt-10">
      <h3 className="text-3xl mb-5">Wettervorhersage</h3>
      <div className="grid grid-cols-10 h-full text-center bg-violet-300 p-5 text-zinc-800">
        {forecasted.map((item, index) => (
          <div
            className="flex-col justify-center flex items-center"
            key={index}
          >
            <p>
              {new Date(`${item.time}` * 1000).toLocaleDateString().slice(0, 4)}
            </p>
            <p>{new Date(`${item.time}` * 1000).toISOString().slice(11, -8)}</p>
            <img
              className="w-1/8 h-auto"
              src={`http://openweathermap.org/img/wn/${item.foreIcon}.png`}
              alt=""
            />
            <h4 className="text-lg">{item.foreTemp.toFixed()}°</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Forecast;
