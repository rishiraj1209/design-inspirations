import { Link } from "react-router-dom"
import { navigation } from "../utils/db"
import { ChevronRight } from "lucide-react"
import { motion } from "motion/react"

const HomePage = () => {
  return (
    <div className='min-h-screen p-4 bg-neutral-50 max-w-6xl mx-auto border-x border-zinc-200 shadow-sm'>
      <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-zinc-700 via-zinc-500 to-zinc-700">Welcome to my awesome collection of Landing Pages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {navigation.map((item,idx)=>(
            <Link className="rounded-lg border border-zinc-200 min-h-50 bg-white shadow-sm p-4 flex items-center justify-center" key={idx} to={item.link}>
                <motion.div initial="rest" whileHover="hover" className="group relative inline-block">
                    <span className="text-xl font-medium">{item.name}</span>
                    <motion.span variants={{rest: { scaleX: 0 },hover: { scaleX: 1 },}} transition={{duration:0.3}} className="absolute left-0 bottom-0 h-0.5 w-full bg-black origin-left"></motion.span>
                </motion.div>
                <span><ChevronRight/></span>
            </Link>
            
        ))}
      </div>
    </div>
  )
}

export default HomePage
