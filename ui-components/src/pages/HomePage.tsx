import { Link } from "react-router-dom"
import { pageVisit } from "../utils/db"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-neutral-100 max-w-5xl mx-auto shadow-md shadow-black py-8 px-8">
      <h1 className="text-4xl leading-tight text-transparent bg-clip-text font-bold bg-linear-to-b from-zinc-800 via-zinc-500 to-zinc-800 text-center text-shadow-md">Welcome to my components library</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 px-8 py-8">
        {pageVisit.map((componentPage, idx)=>(
            <Link key={idx} className="h-40 w-full border-2 border-slate-500 rounded-4xl text-center p-4 text-2xl font-semibold text-shadow-md bg-linear-to-br from-neutral-100 via-neutral-50 to-neutral-100 shadow-md hover:scale-105 transition-all duration-300" to={componentPage.link}>{componentPage.component}</Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage
