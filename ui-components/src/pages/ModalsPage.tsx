import CreateModal from "../components/Modals/CreateModal"

const ModalsPage = () => {
  return (
    <div className="min-h-screen p-8 w-full">
      <h1 className="text-4xl leading-tight text-transparent bg-clip-text font-bold bg-linear-to-b from-zinc-800 via-zinc-500 to-zinc-800 text-shadow-md">Modals</h1>
      <p className="text-xl text-shadow-sm text-neutral-600">A curated list of awesome, Modal components</p>
      
      <div className="min-h-screen bg-neutral-300 rounded-lg mt-8 p-4 shadow-sm border-2 border-zinc-300">
          <div className="bg-neutral-100 rounded-lg min-h-screen shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-8">
            <div className="w-full min-h-50 border border-zinc-200 rounded-md flex items-center justify-center hover:border-zinc-300 transition-all duration-300"><CreateModal/></div>
          </div>
      </div>
    </div>
  )
}

export default ModalsPage
