import { useState } from "react"
import { articles } from "../../../utils/gridData"
import type { GridData } from "../../../types"
import { motion } from "motion/react"

const CategoryLayout = () => {
  const [items, setItems] = useState<GridData[]>(articles);
  const [active, setActive] = useState<GridData | null>(null);

  const sort = (type: "id"| "title" | "description")=>{
    switch (type) {
      case "id": {
        setItems([...items].sort((a,b)=> a.id - b.id));
        return;
      }
      case "title":{
        setItems([...items].sort((a,b)=> a.title.localeCompare(b.title)));
        return;
      }
      case "description":{
        setItems([...items].sort((a,b)=> a.description.localeCompare(b.description)));
        return;
      }
      
    }
  }

  return (
    <div className="relative p-8 rounded-2xl  w-full bg-zinc-200 min-h-screen overflow-hidden">
      <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-neutral-800 to-neutral-900 mb-8">Category Layout Animations</h2>
      <div className="flex items-center gap-2 max-w-5xl mx-auto p-2">
        <button className="px-8 py-1 border border-dashed bg-white shadow-sm font-medium text-lg cursor-pointer" onClick={()=>sort("id")}>id</button>
        <button className="px-8 py-1 border border-dashed bg-white shadow-sm font-medium text-lg cursor-pointer"  onClick={()=>sort("title")}>title</button>
        <button className="px-8 py-1 border border-dashed bg-white shadow-sm font-medium text-lg cursor-pointer" onClick={()=>sort("description")}>description</button>
      </div>
      {active && 
        <motion.div onClick={()=>setActive(null)} className="bg-black/50 inset-0 z-10 flex items-center justify-center w-full h-full absolute">
          <motion.div layoutId={active.title} transition={{type:"spring", stiffness:300, damping:30}} className="h-100 w-80 bg-white border border-dashed border-zinc-400 rounded-md p-2 cursor-pointer flex flex-col gap-2">
                    <img src={active.image} alt={active.title} className="flex-1 rounded-lg" />
                    <div>
                        <p className="text-lg font-medium">{active.title}</p>
                        <p className="text-sm text-neutral-700 mt-2">{active.description}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        {active.tags.map((tag)=>(
                            <span className="text-xs border border-dashed border-black px-2 py-0.5 bg-neutral-700 text-white shadow-sm">{tag}</span>
                        ))}
                    </div>
            </motion.div>
        </motion.div>}
      <div className="grid grid-cols-4 max-w-5xl mx-auto">
            {items.map((item)=>(
                <motion.button onClick={()=>setActive(item)} layoutId={item.title} transition={{type:"spring", stiffness:300, damping:30}} key={item.id} className="relative h-50 p-2" >
                    <div className=" bg-white border border-dashed border-zinc-400 rounded-md h-full w-full p-2 cursor-pointer flex flex-col justify-between">
                        <div>
                            <p className="text-lg font-medium">{item.title}</p>
                            <p className="text-sm text-neutral-700 mt-2">{item.description}</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            {item.tags.map((tag)=>(
                                <span className="text-xs border border-dashed border-black px-2 py-0.5 bg-neutral-700 text-white shadow-sm">{tag}</span>
                            ))}
                        </div>
                    </div>
                </motion.button>
            ))}
        </div>
    </div>
  )
}

export default CategoryLayout
