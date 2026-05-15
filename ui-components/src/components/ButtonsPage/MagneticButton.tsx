import { motion } from "motion/react"
import { useRef, useState } from "react"

const strength = 0.5;
const MagneticButton = () => {
    const ref = useRef<HTMLDivElement>(null);

    const [position, setPosition] = useState({x:0, y:0});


    const handleMouseMove = (e:React.MouseEvent<HTMLDivElement>)=>{
        if(!ref.current) return ;

        const {top, left, width, height} = ref.current.getBoundingClientRect();

        const x = (e.clientX - (left + width/2)) * strength;
        const y = (e.clientY - (top + height/2)) * strength;

        setPosition({x,y});
    }

    const handleMouseLeave = ()=>{
        setPosition({x:0, y:0});
    }

    const hasMoved = position.x !== 0 && position.y !== 0;
  return (
    <div 
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave} 
        className="border-2 border-dashed rounded-md transition-colors duration-200"
        style={{
            borderColor: hasMoved?'blueviolet':'transparent',
            backgroundColor: "color-mix(in srgb, blueviolet 20%, transparent)"
        }}
    >
        <motion.div
            ref={ref}
            animate={{x:position.x, y:position.y}}
            transition={{type:"spring", stiffness:150, damping:25, mass:0.3}}
        >
            <button className="px-8 py-2 bg-linear-to-r from-purple-400 to-purple-600 text-white font-medium text-shadow-sm shadow-sm rounded-md cursor-pointer active:scale-98 transition-all duration-200">
                Magnetic Button
            </button>
        </motion.div>
    </div>
    
  )
}

export default MagneticButton
