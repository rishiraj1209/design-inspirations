import { ArrowRight } from "lucide-react"

const JerseyBentoGrid = () => {
  return (
    <div className="h-160 w-full bg-neutral-100 rounded-2xl mt-8 shadow-md">
      <div className="grid gap-8 grid-cols-6 grid-rows-3 p-8 h-full w-full">
        <div className="col-span-2 row-span-2 bg-[#69b6f4] shadow-sm p-4 rounded-2xl flex flex-col items-center justify-between border-2 border-white">
            <div className="text-white font-medium text-center">
                <h2 className="font-semibold text-2xl">Argentina</h2>
                <p className="mt-2">Argentina 2026 Men's Authentic Home Jersey</p>
                <a className="flex text-lg gap-1 items-center mt-4 justify-center" href="https://www.adidas.co.in/argentina-26-home-jersey/JM8396.html" target="_blank" rel="noopener noreferrer">get <ArrowRight className="size-4"/></a>
            </div>
            <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/20f23eb7f4df4dd4958601c064ffa0d8_9366/Argentina_26_Home_Jersey_White_JM8396_01_laydown.jpg"  alt="argentina jersey" className="h-50 w-full bg-transparent rounded-2xl" />
        </div>

        <div className="col-span-4 row-span-1 bg-[#fe805a] shadow-sm rounded-2xl flex items-center justify-between p-8 border-2 border-yellow-200">
            <div className="text-yellow-300 font-medium ">
                <h2 className="font-semibold text-2xl">Spain</h2>
                <p className="">Spain 2026 Men's Authentic Home Jersey</p>
                <a className="flex gap-1 items-center mt-4" href="https://www.adidas.co.in/spain-26-home-authentic-jersey/JN4366.html" target="_blank" rel="noopener noreferrer">get <ArrowRight className="size-4"/></a>
            </div>
            <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/e011cad799354fceaabcba46d24d97d5_faec/Spain_26_Home_Authentic_Jersey_Red_JN4366_db01_laydown.jpg"  alt="spain jersey" className="h-30 bg-transparent rounded-2xl" />
        </div>

        <div className="col-span-2 row-span-1 bg-[#f9f771] shadow-sm rounded-2xl flex items-center justify-between p-8 border-2 border-blue-800">
            <div className="text-blue-800 font-medium ">
                <h2 className="font-semibold text-xl">Brazil</h2>
                <p className="text-sm">Brazil 2026 Men's Authentic Home Jersey</p>
                <a className="flex gap-1 items-center mt-4 text-sm" href="https://www.nike.com/t/brazil-2026-stadium-home-mens-dri-fit-soccer-replica-jersey-GLz3n7bY/IF7054-724" target="_blank" rel="noopener noreferrer">get <ArrowRight className="size-4"/></a>
            </div>
            <img src="https://store.fifa.com/cdn/shop/files/image_02047e33-3b4e-41f2-869b-ac361dd4b283.jpg?v=1775563958"  alt="Brazil jersey" className="h-20 bg-transparent rounded-2xl" />
        </div>

        <div className="col-span-2 row-span-1 bg-neutral-50 shadow-sm rounded-2xl flex items-center justify-between p-8 border-2 border-black">
            <div className="text-black font-medium ">
                <h2 className="font-semibold text-xl">Germany</h2>
                <p className="text-sm">Germany 2026 Men's Authentic Home Jersey</p>
                <a className="text-sm flex gap-1 items-center mt-4" href="https://www.adidas.co.in/germany-26-home-jersey/KD8363.html" target="_blank" rel="noopener noreferrer">get <ArrowRight className="size-4"/></a>
            </div>
            <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/eb375110062a4e5abf27b49f5428ce96_faec/Germany_26_Home_Jersey_White_KD8363_db01_laydown.tiff.jpg"  alt="portugal jersey" className="h-20 bg-transparent rounded-2xl" />
        </div>

        <div className="col-span-3 row-span-1 bg-[#fd5858] shadow-sm rounded-2xl flex items-center justify-between p-8 border-2 border-green-900">
            <div className="text-green-900 font-medium ">
                <h2 className="font-semibold text-2xl">Portugal</h2>
                <p className="">Portugal 2026 Men's Authentic Home Jersey</p>
                <a className="flex gap-1 items-center mt-4" href="https://in.puma.com/in/en/pd/portugal-2026-mens-authentic-home-jersey/783276?srsltid=AfmBOoqZ0liMRJMsFwvwfcGuyufzbZSM-PrgOEu4V5krB2AsQhkoRz3a" target="_blank" rel="noopener noreferrer">get <ArrowRight className="size-4"/></a>
            </div>
            <img src="https://sportswearpk.com/wp-content/uploads/2026/01/Portugal-2026.png"  alt="portugal jersey" className="h-30 bg-transparent rounded-2xl" />
        </div>

        <div className="col-span-3 row-span-1 bg-[#637afd] shadow-sm rounded-2xl flex items-center justify-between p-8 border-2 border-white">
            <div className="text-white font-medium ">
                <h2 className="font-semibold text-2xl">France</h2>
                <p className="">France 2026 Men's Authentic Home Jersey</p>
                <a className="flex gap-1 items-center mt-4" href="https://www.nike.com/lu/en/w/football-france-1gdj0z9wree" target="_blank" rel="noopener noreferrer">get <ArrowRight className="size-4"/></a>
            </div>
            <img src="https://store.fifa.com/cdn/shop/files/image_97c7b304-c8ac-48bb-b2a2-d6349ac9c33a.jpg?v=1775564062"  alt="France jersey" className="h-30 bg-transparent rounded-2xl" />
        </div>
      </div>
    </div>
  )
}

export default JerseyBentoGrid
