import JerseyBentoGrid from "../components/BentoGrid/FifaJersey/JerseyBentoGrid"

const BentoGridPage = () => {
  return (
    <div className="min-h-screen p-8 w-full">
      <h1 className="text-4xl leading-tight text-transparent bg-clip-text font-bold bg-linear-to-b from-zinc-800 via-zinc-500 to-zinc-800 text-shadow-md">Bento Grids</h1>
      <p className="text-xl text-shadow-sm text-neutral-600">A curated list of well designed Bento Grids</p>
      <div className="min-h-screen mt-8">
        {/* Fifa world Cup jersey theme */}
        <div className="bg-zinc-200 border border-zinc-300 rounded-lg px-4 py-6 max-w-5xl mx-auto">
          <h1 className="font-medium text-xl text-shadow-sm text-center">Bento Grid in Fifa Jersey Theme</h1>
          <JerseyBentoGrid/>
        </div>
      </div>
    </div>
  )
}

export default BentoGridPage
