function Forecast(props) {
  const forecasted = props.forecast;
  console.log(forecasted);
  return (
    <div className="container mt-20">
      <div className="grid grid-cols-10 h-full text-center bg-violet-300 p-5 text-zinc-800"></div>
      {forecasted.map((item, index) => (
        <div key={index}>
          <p>Temperatur{item.foreTemp}</p>
        </div>
      ))}
    </div>
  );
}
export default Forecast;
