import { Laptop2Icon, TabletIcon, ExternalLinkIcon, RefreshCcw, ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";


const OnhoverNavbar = () => {
    const [isDesktop, SetIsDesktop] = useState<Boolean>(true);
  return (
    <div className="h-80 w-full bg-white shadow-md rounded-xl p-4">
      <h1 className="text-center text-2xl text-shadow-sm font-semibold">OnHover Navbar</h1>
      <div className="border h-60 mt-4 border-neutral-300 w-full rounded-xl">
        <div className='max-w-xl mx-auto p-8'>
            <div className="flex gap-4 items-center">
                <button type="button" onClick={()=>SetIsDesktop(!isDesktop)}>{isDesktop ? <Laptop2Icon />:<TabletIcon />}</button>
                <div className="rounded-full border p-2 flex items-center justify-between flex-1">
                    <div className="flex gap-4 items-center">
                        <ArrowLeft/>
                        <ArrowRight/>
                    </div>
                    <div className="flex gap-2 items-center">
                        <p>Home</p>
                        <ChevronDown/>
                    </div>
                    <RefreshCcw/>
                </div>
                <ExternalLinkIcon/>
            </div>
            <div className="flex items-center justify-between p-4 mt-4">
                <p className="text-neutral-500">page : <span className="text-neutral-900">Home</span></p>
                <p className="text-neutral-500">view : <span className="text-neutral-900">{isDesktop?'Desktop':'Mobile'}</span></p>
                <p className="text-neutral-500">refresh # : <span className="text-neutral-900">0</span></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OnhoverNavbar
