import { useEffect, useState } from "react"

const Countdown = () => {
    const [timeLeft , setTimeLeft] = useState(3600);

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTimeLeft((prev)=>{
                if(prev <= 1){
                    clearInterval(timer);
                    return 0;
                }

                return prev - 1;
            });

        },1000);

        return ()=>clearInterval(timer);
    },[])

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

  return (
    <div className="font-medium">
      {String(hours).padStart(2, '0')}:{String(minutes).padStart(2,'0')}:{String(seconds).padStart(2,'0')}
    </div>
  )
}

export default Countdown
