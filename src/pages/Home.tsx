export function Home() {
  return (
    <div className="flex justify-center">
      <h1 className="absolute z-10 text-white text-6xl mt-10 select-none font-[HarryPotter]">Welcome to the Potterpedia!</h1>
      <img className="fixed pointer-events-none select-none w-full h-full object-cover" src="../home_background.png"/>
    </div>
  );
}
