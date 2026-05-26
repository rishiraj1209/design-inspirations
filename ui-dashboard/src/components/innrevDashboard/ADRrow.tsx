import { MapPin } from "lucide-react"
import type { HotelData } from "../../types"

const ADRrow = (hotel:HotelData) => {
  return (
    <div className="bg-white rounded-2xl flex items-center justify-between py-2 px-4">
      <div className="flex item-center gap-2">
        <img src={hotel.logo} alt={hotel.name} className="h-8 w-8 rounded-full object-contain bg-white" />
        <div>
            <p className="text-sm">{hotel.name}</p>
            <div className="text-xs flex items-center gap-2">
                <MapPin className="size-3"/>
                <p>{hotel.location}</p>
            </div>
        </div>
      </div>

      <div className="bg-neutral-100 rounded-full px-2 py-1 text-sm">
        ${hotel.adr}
      </div>
    </div>
  )
}

export default ADRrow
