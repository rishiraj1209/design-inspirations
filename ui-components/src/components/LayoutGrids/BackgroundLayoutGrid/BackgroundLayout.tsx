import { useState } from "react"
import { articles } from "../../../utils/gridData"
import type { GridData } from "../../../types"
import { motion } from "motion/react"

const BackgroundLayout = () => {
    const items: GridData[] = articles;
    const [active, setActive] = useState<null|number>(null);
  return (
    <div className="p-8 rounded-2xl w-full bg-zinc-200 min-h-screen">
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-neutral-800 to-neutral-900 mb-8">Background Layout Animations</h2>
        <div className="grid grid-cols-4 max-w-5xl mx-auto">
            {items.map((item)=>(
                <div key={item.id} className="relative h-50 p-2" onMouseEnter={()=>{setActive(item.id)}} onMouseLeave={()=>{setActive(null)}}>
                    <motion.div initial={{scale:1,opacity:0.8}} whileHover={{scale:0.95,opacity:1}} className="relative bg-white border border-dashed border-zinc-400 rounded-md h-full w-full z-20 p-2 cursor-pointer flex flex-col justify-between">
                        <div>
                            <p className="text-lg font-medium">{item.title}</p>
                            <p className="text-sm text-neutral-700 mt-2">{item.description}</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            {item.tags.map((tag)=>(
                                <span className="text-xs border border-dashed border-black px-2 py-0.5 bg-neutral-700 text-white shadow-sm">{tag}</span>
                            ))}
                        </div>
                    </motion.div>
                    {active === item.id && <motion.div layoutId="active" transition={{type:"spring",stiffness:400, damping:30}} className="absolute bg-zinc-500 inset-0 z-10 rounded-sm"></motion.div>}  
                </div>
            ))}
        </div>
    </div>
    
  )
}

export default BackgroundLayout
