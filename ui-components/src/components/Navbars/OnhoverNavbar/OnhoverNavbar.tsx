import { Laptop2Icon, TabletIcon, ExternalLinkIcon, RefreshCcw, ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const pages = [
    "Home", "About", "Contact", "Pricing", "Blog"
]


const OnhoverNavbar = () => {
    const [isDesktop, SetIsDesktop] = useState(true);
    const [activePage, setActivePage] = useState("Home");
    const [count ,setCount] = useState(0);
    const [isDropDown, setIsDropDown] = useState(false);

    const currentIndex = pages.indexOf(activePage);

    const handlePrevious = ()=>{
        if(currentIndex > 0){
            setActivePage(pages[currentIndex-1]);
        }
    }

    const handleNext = ()=>{
        if(currentIndex < pages.length - 1){
            setActivePage(pages[currentIndex+1]);
        }
    }


  return (
    <div className="h-100 w-full bg-white shadow-md rounded-xl p-4">
      <h1 className="text-center text-2xl text-shadow-sm font-semibold">OnHover Navbar</h1>
      <div className="border h-80 mt-4 border-neutral-300 w-full rounded-xl">
        <div className='max-w-xl mx-auto p-8'>
            <div className="flex gap-4 items-center">
                <button className="transition-all duration-300 cursor-pointer hover:bg-zinc-100 p-2 rounded-full" type="button" onClick={()=>SetIsDesktop(!isDesktop)}>
                    <AnimatePresence mode="wait">
                        {isDesktop?(
                            <motion.div
                            key="desktop"
                            initial={{scale:0}}
                            animate={{scale:1}}
                            exit={{scale:0}}
                            transition={{duration:0.1}}
                            >
                                <Laptop2Icon/>
                            </motion.div>
                        ):(
                            <motion.div
                            key="mobile"
                            initial={{scale:0}}
                            animate={{scale:1}}
                            exit={{scale:0}}
                            transition={{duration:0.3}}
                            >
                                <TabletIcon/>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
                </button>
                <div className="rounded-full border p-2 flex items-center justify-between flex-1">
                    <div className="flex gap-4 items-center">
                        <button type="button" aria-label="Previous page"  onClick={handlePrevious} disabled={currentIndex===0} className={`${currentIndex===0?'opacity-40 cursor-not-allowed':'opacity-100'} hover:bg-zinc-100 p-1 rounded-full transition-all duration-300`}>
                            <ArrowLeft size={20}/>
                        </button>

                        <button type="button" aria-label="Next page" onClick={handleNext} disabled={currentIndex===pages.length-1} className={`${currentIndex===pages.length-1?'opacity-40 cursor-not-allowed':'opacity-100'} hover:bg-zinc-100 p-1 rounded-full transition-all duration-300`}>
                            <ArrowRight size={20}/>
                        </button>
                    </div>
                    <div onClick={()=>{setIsDropDown(!isDropDown)}} className="relative flex gap-2 items-center cursor-default">
                        <p>{activePage}</p>
                        <motion.div
                        animate={{rotate:isDropDown?180:0}}
                        transition={{duration:0.3}}
                        >
                            <ChevronDown/>
                        </motion.div>
                        <AnimatePresence>
                            {isDropDown && 
                            <motion.div
                                initial={{ y:-10, opacity:0 , scale:0.98}}
                                animate={{y:0, opacity:1, scale:1}}
                                exit={{y:-10, opacity:0, scale:0.98}}
                                transition={{duration:0.3, ease:'easeInOut'}}
                                className="absolute -left-18 top-10 w-50 border flex flex-col space-y-2 justify-center items-center p-4 bg-white rounded-xl border-zinc-300">
                                    {pages.map((page)=>(
                                        <p className="hover:bg-zinc-100 w-full text-center rounded-md transition-all duration-300 cursor-pointer p-1" onClick={()=>{setActivePage(page); setIsDropDown(false)}} key={page}>{page}</p>
                                    ))}
                            </motion.div>}
                        </AnimatePresence>
                    </div>
                    <motion.div
                        whileTap={{rotate:360}}
                        transition={{duration:0.3}}
                    >
                        <RefreshCcw className="cursor-pointer" onClick={()=>{setCount(count+1)}}/>
                    </motion.div>
                </div>
                <motion.div whileTap={{x:[0,5,0,5,0]}} transition={{duration:0.2}}>
                    <ExternalLinkIcon className="cursor-pointer"/>
                </motion.div>
            </div>
            <div className="flex items-center justify-between p-4 mt-4">
                <p className="text-neutral-500">page : <span className="text-neutral-900">{activePage}</span></p>
                <p className="text-neutral-500">view : <span className="text-neutral-900">{isDesktop?'Desktop':'Mobile'}</span></p>
                <p className="text-neutral-500">refresh # : <span className="text-neutral-900">{count}</span></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OnhoverNavbar




