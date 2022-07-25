function Background(props) {
  return (
    <section
      id="home"
      className="relative h-full img-home"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      {/* <div className="container mx-auto lg:pr-56 lg:pl-56 pr-10 pl-10 lg:pt-28 pt-10 pb-28">
        <div className="opacity-1 flex flex-col items-center backdrop-opacity-10 backdrop-invert bg-white/30 p-10 rounded-lg drop-shadow-sm">
          <h1 className="text-4xl font-black bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-600 lg:text-6xl tracking-widest uppercase">
            Bienvenido a DEPI SAS
          </h1>
          <br />
          <h1 class="text-3xl font-black xl:text-5xl">
            <p class="text-transparent text-center bg-clip-text bg-gradient-to-r from-green-500 to-green-700">
              "Green is the Way"
            </p>
          </h1>
          <div className="flex flex-row justify-center">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/save-planet-4976907-4146721.png"
              alt="icono 12"
              className="lg:w-96 w-40"
            />
          </div>
        </div>
      </div> */}
    </section>
  );
}
export default Background;
