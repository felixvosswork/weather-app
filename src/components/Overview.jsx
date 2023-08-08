function Overview({ result }) {
  const { name } = result;
  return (
    <div className="container pt-10">
      <div className="w-full name">
        <h1 className="text-7xl font-semibold mb-5">{name}</h1>
        <h2 className="text-2xl">Montag 1 August</h2>
      </div>
      <div className="flex mt-10 mb-10 weather-now">
        <div className="w-1/3">
          <div className="flex items-end">
            <span className="icon me-20">ICON</span>
            <h2 className="text-9xl">5°</h2>
            <h3 className="text-2xl mt-3">wolkig</h3>
          </div>
        </div>
        <div className="w-2/3">
          <div className="grid gap-4 place-items-center grid-cols-6 h-full text-center bg-violet-300 p-5 text-zinc-800">
            <div>
              <p>value</p>
              <p>category</p>
            </div>
            <div>
              <p>value</p>
              <p>category</p>
            </div>
            <div>
              <p>value</p>
              <p>category</p>
            </div>
            <div>
              <p>value</p>
              <p>category</p>
            </div>
            <div>
              <p>value</p>
              <p>category</p>
            </div>
            <div>
              <p>value</p>
              <p>category</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Overview;
