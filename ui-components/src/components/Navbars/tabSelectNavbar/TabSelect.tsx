import { useState } from "react"
import { motion } from "motion/react"

const tabs = [
    "Home", "About","Projects", "Contact"
]
const TabSelect = () => {

    const [active, setActive] = useState("Home")

  return (
    <div className="h-40 w-full bg-white shadow-md rounded-xl p-4 flex flex-col items-center space-y-10">
      <h1 className="text-2xl text-shadow-sm font-semibold">Tab Select Navbar</h1>

      <div className="bg-zinc-200 px-1 py-1 flex items-center gap-2 rounded-full">
        {tabs.map((tab)=>(
            <button key={tab} onClick={()=>{setActive(tab)}} className="relative px-5 py-2 font-medium text-sm active:scale-98 transition-all duration-200 cursor-pointer hover:text-neutral-700">
                {tab === active && 
                    <motion.div className="absolute inset-0 bg-white rounded-full shadow-sm border border-zinc-200" layoutId="tab-pill" transition={{type:'spring',stiffness:500,damping:35}}/>
                }
                
                <span className={`relative z-10 ${tab === active? 'text-neutral-700':'text-neutral-500'}`} >
                    {tab}
                </span>
            </button>
        ))}
      </div>
    </div>
  )
}

export default TabSelect
