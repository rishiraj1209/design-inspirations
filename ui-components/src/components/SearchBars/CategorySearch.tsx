import { useState } from "react";
import { motion } from "motion/react";
import { Search, X, Flame, Heart } from "lucide-react";

const tabs = [
    {
        label:"Popular",
        icon: Flame
    },
    {
        label:"Favorite",
        icon: Heart
    }
]

export default function SearchMorph() {
  const [searchMode, setSearchMode] = useState(false);
  const [activeTab, setActiveTab] = useState("Popular");

  return (
    <div className="bg-neutral-100 h-40 w-full shadow-md rounded-2xl flex items-center justify-center">
        <div className="flex items-center gap-4 width-[240px]">
                {
                    !searchMode?
                    (
                        <motion.div
                        layoutId="search"
                        transition={{type: "spring",stiffness: 200,damping: 20,}}
                        >
                            <motion.button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md" onClick={()=>{setSearchMode(true)}} aria-label="search-button">
                                <Search className="w-5 h-5 shrink-0"/>
                            </motion.button>
                        </motion.div>
                    ):
                    (
                        <motion.div
                        layoutId="search"
                        transition={{type: "spring",stiffness: 200,damping: 20,}}
                        >
                            <motion.div className="flex items-center gap-2 bg-white rounded-full px-4 py-3 shadow-md">
                                <Search className="w-5 h-5 shrink-0"/>
                                <input type="text" placeholder="search" className="outline-0 bg-transparent"/>
                            </motion.div>
                        </motion.div>
                    )
                }

                {
                    !searchMode?
                    (
                        <motion.div
                            layoutId="filter"
                            transition={{type: "spring",stiffness: 200,damping: 20,}}
                            className="flex items-center gap-2 bg-white rounded-full p-1 shadow-md">
                            {tabs.map((tab)=>{
                                const Icon = tab.icon;
                                return (
                                    <button className="relative" key={tab.label} onClick={()=>{setActiveTab(tab.label)}}>
                                        {activeTab == tab.label &&
                                        <motion.div layoutId="tab-pill" transition={{type: "spring",stiffness: 250,damping: 25,}} className="absolute inset-0 bg-red-50 z-10 rounded-full h-full w-full "></motion.div>}
                                        <div className={`relative flex items-center gap-1 z-20 px-4 py-2 font-medium ${activeTab === tab.label ? 'text-red-500':'text-neutral-700'}`}>
                                            <Icon className="w-5 h-5 shrink-0"/>
                                            <span>{tab.label}</span>
                                        </div>
                                    </button>
                                )
                            })}
                        </motion.div>
                    ):
                    (
                        <motion.div
                        layoutId="filter"
                        transition={{type: "spring",stiffness: 200,damping: 20,}}
                        >
                            <button className="bg-white shadow-md w-12 h-12 flex items-center justify-center rounded-full" onClick={()=>{setSearchMode(false)}} aria-label="search-button">
                                <X className="w-5 h-5 shrink-0"/>
                            </button>
                        </motion.div>
                    )
                }
            
        </div>
    </div>
  );
}





