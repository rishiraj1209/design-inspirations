import DeliveryTrackerCard from "../components/Cards/deliveryTrackerCard/DeliveryTrackerCard"
import FeaturesCard from "../components/Cards/featuresCard/FeaturesCard"

const CardsPage = () => {
  return (
    <div className="min-h-screen p-8 w-full">
      <h1 className="text-4xl leading-tight text-transparent bg-clip-text font-bold bg-linear-to-b from-zinc-800 via-zinc-500 to-zinc-800 text-shadow-md">Cards</h1>
      <p className="text-xl text-shadow-sm text-neutral-600">A curated list of awesome, Card components</p>
      <div className="min-h-screen mt-8 space-y-8">
        {/* delivery tracker card in motion */}
        <div className="bg-zinc-200 border border-zinc-300 rounded-lg px-4 py-6 max-w-5xl mx-auto">
          <h1 className="font-medium text-xl text-shadow-sm">Delivery Tracker Card</h1>
          <DeliveryTrackerCard/>
        </div>

        {/*Features card with motion */}
        <div className="bg-zinc-200 border min-h-160 border-zinc-300 rounded-lg px-4 py-6 max-w-5xl mx-auto">
          <h1 className="font-medium text-xl text-shadow-sm">Features Card</h1>
          <FeaturesCard/>
        </div>
      </div>
    </div>
  )
}

export default CardsPage
