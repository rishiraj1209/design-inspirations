import { Calendar, Flag, Folder, Notebook, Plus, StickyNote, Trophy, XIcon } from "lucide-react";
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react";


const CreateModal = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <motion.div layout className={`${isOpen?'p-1 rounded-lg bg-black':''}`}>
        <motion.button layout onClick={()=>{setIsOpen(!isOpen)}} className={`bg-black text-white font-medium flex items-center rounded-full py-2 px-4 w-full gap-2 justify-between`}>
            <p>Create New</p>
            <span>{isOpen? <XIcon/>:<Plus/>}</span>
        </motion.button>
        <AnimatePresence mode="wait">
            {isOpen && 
                <motion.div layout initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0}} transition={{duration:0.3,ease:'easeInOut'}}
                 className={`grid grid-cols-3 bg-white rounded-lg gap-2 p-4 `}>
                    <div className={`rounded-lg bg-transparent hover:bg-neutral-100 flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300`}>
                        <div><Folder className="size-5"/></div>
                        <p className="text-sm">Project</p>
                    </div>
                    <div className={`rounded-lg bg-transparent hover:bg-neutral-100 flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300`}>
                        <div><Notebook className="size-5"/></div>
                        <p className="text-sm">Notebook</p>
                    </div>
                    <div className={`rounded-lg bg-transparent hover:bg-neutral-100 flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300`}>
                        <div><StickyNote className="size-5"/></div>
                        <p className="text-sm">Notes</p>
                    </div>
                    <div className={`rounded-lg bg-transparent hover:bg-neutral-100 flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300`}>
                        <div><Trophy className="size-5"/></div>
                        <p className="text-sm">Goal</p>
                    </div>
                    <div className={`rounded-lg bg-transparent hover:bg-neutral-100 flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300`}>
                        <div><Flag className="size-5"/></div>
                        <p className="text-sm">Milestone</p>
                    </div>
                    <div className={`rounded-lg bg-transparent hover:bg-neutral-100 flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300`}>
                        <div><Calendar className="size-5"/></div>
                        <p className="text-sm">Event</p>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default CreateModal
