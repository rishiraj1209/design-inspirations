import { CarFront, Zap } from "lucide-react"
import type { YourOverview } from "../../types"

const YourOverviewCard = (overview:YourOverview) => {
  return (
    <div className="bg-white rounded-4xl h-[90%] mt-2 w-full py-2 px-4">

      <div className="flex gap-2 items-center">
        <div className="rounded-full h-10 w-10 bg-neutral-100 flex items-center justify-center"><Zap className="size-4"/></div>
        <p>{overview.hotelName}</p>
      </div>

      <div className=" flex items-center justify-center flex-col mb-4">
        <p className="border-4 rounded-full h-16 w-16 flex items-center justify-center border-fuchsia-200">{overview.occupancy}</p>
        <p className="text-sm">occupancy</p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center bg-neutral-100 w-full rounded-2xl px-4 py-2">
          <div>
            <p className="text-xs text-neutral-500">Your Property ADR</p>
            <p className="text-sm">{overview.propertyADR} %</p>
          </div>
          <div className="flex items-center justify-center bg-white h-10 w-10 rounded-full"><CarFront className="size-4"/></div>
        </div>

        <div className="flex justify-between items-center bg-neutral-100 w-full rounded-2xl px-4 py-2">
          <div>
            <p className="text-xs text-neutral-500">Comp Set ADR</p>
            <p className="text-sm">{overview.compSetADR} %</p>
          </div>
          <div className="flex items-center justify-center bg-white h-10 w-10 rounded-full"><Zap className="size-4"/></div>
        </div>
        
      </div>
    </div>
  )
}

export default YourOverviewCard
