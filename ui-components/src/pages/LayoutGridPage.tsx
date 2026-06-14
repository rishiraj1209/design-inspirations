import BackgroundLayout from "../components/LayoutGrids/BackgroundLayoutGrid/BackgroundLayout"
import CategoryLayout from "../components/LayoutGrids/CategoryLayoutGrid/CategoryLayout"

const LayoutGridPage = () => {
  return (
    <div className="min-h-screen w-full p-8">
        <h1 className="text-4xl leading-tight text-transparent bg-clip-text font-bold bg-linear-to-b from-zinc-800 via-zinc-500 to-zinc-800 text-shadow-md">Layout Grids</h1>
        <p className="text-xl text-shadow-sm text-neutral-600">A curated list of awesome layout grid components</p>
        <div className="mt-8 space-y-8 max-w-6xl mx-auto">
            <div className="">
                <CategoryLayout/>
            </div>
            <div className="">
                <BackgroundLayout/>
            </div>
        </div>
        
    </div>
  )
}

export default LayoutGridPage
