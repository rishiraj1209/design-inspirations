import {
  Calendar, Flag, Folder, Notebook,
  Plus, StickyNote, Trophy, XIcon
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const items = [
  { icon: Folder, label: "Project" },
  { icon: Notebook, label: "Notebook" },
  { icon: StickyNote, label: "Notes" },
  { icon: Trophy, label: "Goal" },
  { icon: Flag, label: "Milestone" },
  { icon: Calendar, label: "Event" },
];

const CreateModal = () => {
    const [isOpen, setIsopen] = useState(false);
  return (
  <AnimatePresence mode="wait">
    {!isOpen?
        (
        <motion.div layoutId="modal">
            <motion.button layoutId="modal-button" onClick={()=>{setIsopen(true)}} className="px-4 py-2 flex items-center gap-2 bg-black text-white font-medium rounded-full cursor-pointer">
                <motion.p layoutId="modal-para">Create New</motion.p>
                <motion.div layoutId="modal-icon"><Plus/></motion.div>
            </motion.button>
        </motion.div>
    ):
        (
        <motion.div layoutId="modal" className="bg-black p-1 rounded-lg overflow-hidden">
            <motion.button layoutId="modal-button" onClick={()=>{setIsopen(false)}} className="px-4 py-2 flex items-center justify-between w-full text-white font-medium cursor-pointer">
                <motion.p layoutId="modal-para">Create New</motion.p>
                <motion.div layoutId="modal-icon"><XIcon/></motion.div>
            </motion.button>
            <AnimatePresence mode="wait">
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.25,}} className="grid grid-cols-3 gap-1 p-3 bg-neutral-100 rounded-lg">
                    {items.map(({ icon: Icon, label }) => (
                        <div
                        className="rounded-xl flex flex-col items-center justify-center py-2 px-2 gap-2 hover:bg-neutral-200 cursor-pointer transition-all duration-300"
                        >
                        <Icon
                            className="size-5 text-neutral-700"
                        />
                        <span className="text-xs text-neutral-700">
                            {label}
                        </span>
                        </div>
                    ))}
                </motion.div>
            </AnimatePresence>
            
        </motion.div>
    )
    }
  </AnimatePresence>
    
  )
}

export default CreateModal
