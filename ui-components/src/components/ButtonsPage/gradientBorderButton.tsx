
const GradientBorderButton = () => {
  return (
    <div className="relative overflow-hidden p-0.5 rounded-full group ">
        <div className="absolute inset-[-1000%] animate-spin-slow bg-conic from-pink-500 via-purple-500 to-cyan-400 "/>
        <button className="relative px-8 py-2 rounded-full bg-[#e2f4f7] text-[#380474] font-medium group-active:scale-98 transition-all duration-300 cursor-pointer">
            gradient border
        </button>
    </div>
  )
}

export default GradientBorderButton
