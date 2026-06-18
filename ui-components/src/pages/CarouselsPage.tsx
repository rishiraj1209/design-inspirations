import MovingCrousels from "../components/crousels/MovingCrousels"

const CarouselsPage = () => {
  return (
    <div className="min-h-screen p-8 w-full">
      <h1 className="text-4xl leading-tight text-transparent bg-clip-text font-bold bg-linear-to-b from-zinc-800 via-zinc-500 to-zinc-800 text-shadow-md">Crousels</h1>
      <p className="text-xl text-shadow-sm text-neutral-600">A curated list of awesome, Carousel components</p>
      <div className="mt-8 space-y-8">
        <MovingCrousels/>
      </div>
    </div>
  )
}

export default CarouselsPage
