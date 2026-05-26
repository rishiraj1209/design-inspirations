import { MapPin } from "lucide-react"
import type { HotelData } from "../../types"

const HotelOverviewCard = (hotel:HotelData) => {
  return (
    <div className="bg-white h-full w-full py-4 px-2 rounded-2xl mt-4">
      <div className="flex item-center gap-2">
        <img src={hotel.logo} alt={hotel.name} className="h-10 w-10 rounded-full object-contain bg-white" />
        <div>
            <p className="">{hotel.name}</p>
            <div className="text-xs flex items-center gap-2">
                <MapPin className="size-3"/>
                <p>{hotel.location}</p>
            </div>
        </div>
      </div>
      <div className="flex item-center gap-2 mt-3 justify-between">
        <div >
            <div className="border-2 border-fuchsia-100 rounded-full h-12 w-12 flex items-center justify-center">{hotel.occupancy}</div>
            <p className="text-xs border-neutral-500">occupancy</p>
        </div>

        <div className="space-y-2">
            <div className="bg-neutral-200 flex items-center justify-between rounded-full px-4 py-2 text-sm">
                <p>ADR</p>
                <p>{hotel.adr}</p>
            </div>
            <div className="bg-neutral-200 flex items-center justify-between rounded-full px-4 py-2 text-sm">
                <p>RevPar</p>
                <p>{hotel.revPar}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HotelOverviewCard
