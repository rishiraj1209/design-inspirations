import { BoxIcon, Clock, Package } from "lucide-react"
import Countdown from "./Countdown"
import { motion } from "motion/react"

// to improve the the lagging of the countdown clock in future

const DeliveryTrackerCard = () => {
  return (
    <div className="max-w-xl mx-auto bg-white h-120 w-full rounded-2xl mt-4 shadow-md p-4">
      <div className="border-zinc-300 border-2 h-full w-full rounded-2xl overflow-hidden">
        <div className="bg-zinc-200 h-1/2 relative">
            <div className="group absolute top-2 right-2 bg-black p-2 rounded-xl flex items-center cursor-pointer ">
                <span className="text-white shrink-0"><Clock/></span>
                <div className="opacity-0 max-w-0 overflow-hidden translate-x-2 group-hover:max-w-50 group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-2 transition-all duration-700 ease-out">
                  <span className="whitespace-nowrap text-white"><Countdown/></span>
                </div>
            </div>

            {/* Conveyor Belt */}
            <div className="absolute top-45 left-0 w-full h-12 bg-zinc-300">
              
            </div>

            {/* Moving Box */}
            <motion.div animate={{x:[0,600]}} transition={{duration:5, repeat:Infinity, ease:'linear'}} className="absolute top-35 w-20 h-20"><Package className="w-full h-full fill-neutral-800"/></motion.div>
        </div>
        <div className="font-medium h-1/2">
            <div className="h-2/3 p-8">
                <h2 className="font-semibold text-2xl">Track Your delivery</h2>
                <p className="text-neutral-400 mt-2">Monitor your shipment in real time. Stay informed about your delivery's progress every step of the way</p>
            </div>
            <div className="py-4 px-8 flex items-center justify-between h-1/3 border-t-2 border-zinc-300">
                <button className="border-2 border-zinc-300 px-4 py-2 rounded-2xl cursor-pointer">View Status</button>
                <p className="text-neutral-400 flex items-center gap-2"><span><BoxIcon/></span>Your delivery is on its way!</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryTrackerCard
