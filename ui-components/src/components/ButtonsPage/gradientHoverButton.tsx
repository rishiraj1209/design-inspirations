
const GradientHoverButton = () => {
  return (
    <button className="relative group overflow-hidden w-50 h-10 bg-linear-to-r from-indigo-600 to-purple-600 text-white text-shadow-sm font-medium rounded-sm shadow-md cursor-pointer">
        <span className="absolute bg-linear-to-r from-transparent via-fuchsia-400 to-transparent inset-0 -translate-x-20 group-hover:translate-x-20 transition duration-500 ease"/>
        <span className="relative z-10">Hover Me</span>
    </button>
  )
}

export default GradientHoverButton
