import { Hourglass, MessageSquare, View, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react";
const FeaturesCard = () => {
    const [open, setOpen] = useState(true);
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
        <motion.button
        initial={{
            scale:1
        }}
        whileTap={{
            scale:0.9
        }}
        transition={{
            type:'spring', stiffness:200, damping:20
        }}

        className="border px-8 py-1 rounded-lg border-zinc-400 bg-white shadow-sm" onClick={()=>{setOpen(true)}}>
            show Card
        </motion.button>
        <AnimatePresence>
            {open && 
                (
                <motion.div
                initial={{
                    opacity:0,
                    scale:0.95,
                    filter:"blur(10px)"
                }}
                animate={{
                    opacity:1,
                    scale:1,
                    filter:"blur(0px)"
                }}
                exit={{
                    opacity:0,
                    scale:0.95,
                    filter:"blur(10px)"
                }}
                transition={{
                    type:'spring', stiffness:200, damping:20
                }}
                 className="bg-white h-120 max-w-90 mx-auto rounded-xl shadow-md flex flex-col p-4 border border-zinc-200">
                    <h1 className="font-medium text-lg">Aceternity UI Components</h1>
                    <p className="text-md text-neutral-700 mt-2">A collection of beautiful UI components, let's get on with it</p>

                    <div className="flex items-center justify-center">
                        <button onClick={()=>{setOpen(false)}} className="flex items-center gap-1 border border-zinc-200 rounded-lg px-2 py-0.5 shadow-sm mt-8 mb-4">
                            <img src="https://ui.aceternity.com/logo-dark.png" alt="" className="w-8 h-8" />
                            <p>Aceternity</p>
                            <XIcon/>
                        </button>
                    </div>

                    <div className="relative flex-1 bg-zinc-100 rounded-lg border-zinc-200">
                        <motion.div
                            initial={{
                                opacity:0,
                                filter:"blur(10px)",
                                scale:0.95
                            }}

                            whileHover={{
                                opacity:1,
                                filter:"blur(0px)",
                                scale:1
                            }}
                            transition={{
                                type:'spring', stiffness:200, damping:20
                            }}
                         className="absolute inset-0 divide-y divide-zinc-300 bg-white border border-zinc-200 rounded-lg">
                            <div className='flex gap-4 p-6'>
                                <div className='h-10 w-10 bg-white bg-linear-to-br rounded-lg shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] flex items-center justify-center'
                                >
                                    <MessageSquare className='w-6 h-6 text-neutral-600'/>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-sm font-semibold text-neutral-700'>Aceternity UI Components</p>
                                    <p className='text-xs font-medium text-neutral-500 mt-1'>A collection of UI components</p>
                                </div>
                            </div>

                            <div className='flex gap-4 p-6'>
                                <div className='h-10 w-10 bg-white bg-linear-to-br rounded-lg shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] flex items-center justify-center'
                                >
                                    <Hourglass className='w-6 h-6 text-neutral-600'/>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-sm font-semibold text-neutral-700'>24 hours turn around</p>
                                    <p className='text-xs font-medium text-neutral-500 mt-1'>super fast delivery at warp speed</p>
                                </div>
                            </div>

                            <div className='flex gap-4 p-6'>
                                <div className='h-10 w-10 bg-white bg-linear-to-br rounded-lg shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] flex items-center justify-center'>
                                    <View className='w-6 h-6 text-neutral-600'/>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-sm font-semibold text-neutral-700'>360 days all around</p>
                                    <p className='text-xs font-medium text-neutral-500 mt-1'>We are here to help you 24/7</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    
                </motion.div>
                )
            }
        </AnimatePresence>
        
    </div>
    
    
  )
}

export default FeaturesCard






