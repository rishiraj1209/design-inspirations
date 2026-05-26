import { BriefcaseBusiness, CalendarDays, ChartPie, House, LogOut, MapPin, Search, User } from "lucide-react"

const InnrevDashboard = () => {
  return (
    <div className='h-screen bg-linear-to-r from-indigo-200 via-pink-100 to-fuchsia-200 py-16 px-32'>
      <div className="rounded-4xl border-3 border-white h-full w-full p-4 bg-neutral-100/20 flex flex-col">
        <nav className="flex items-center justify-between">
          <div className="bg-white rounded-full flex items-center gap-2 p-1 pr-4">
            <img className="w-10 h-10 rounded-full object-cover" src="https://cdn.dribbble.com/userupload/45303040/file/2a807f0d69ef464a6487e8dee4b1a0fe.jpg?resize=2048x1536&vertical=center" alt="logo" />
            <p>innrev.ai</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2 items-center bg-white rounded-full p-1 pr-8">
              <div className="bg-neutral-100 rounded-full flex items-center justify-center p-2"><MapPin className="text-neutral-700"/></div>
              <div className="text-sm">
                <p className="text-neutral-500">Going to</p>
                <p>Roswell, New Mexico, United States</p>
              </div>
            </div>
            <div className="flex gap-2 items-center bg-white rounded-full p-1 pr-8">
              <div className="bg-neutral-100 rounded-full flex items-center justify-center p-2"><CalendarDays className="text-neutral-700"/></div>
              <div className="text-sm">
                <p className="text-neutral-500">Dates</p>
                <p>Jan 9 - Jan 10</p>
              </div>
            </div>
            <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center"><Search className="size-4 text-neutral-700"/></div>
            <img className="bg-white rounded-full h-12 w-12 object-cover object-top" src="https://images.unsplash.com/photo-1618517047977-854f5c4b6976?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" />
          </div>
        </nav>

        <div className="flex-1 mt-2">
          <div className="flex h-full items-center gap-2">
            <div className="w-12 bg-white h-full rounded-full flex flex-col justify-between items-center p-1">
              <div className="flex flex-col gap-2 items-center">
                <div className="rounded-full bg-indigo-400 flex items-center justify-center w-10 h-10 text-white"><House className="size-4"/></div>
                <div className="rounded-full bg-neutral-100 flex items-center justify-center w-10 h-10 text-neutral-800"><ChartPie className="size-4"/></div>
                <div className="rounded-full bg-neutral-100 flex items-center justify-center w-10 h-10"><BriefcaseBusiness className="size-4"/></div>
                <div className="rounded-full bg-neutral-100 flex items-center justify-center w-10 h-10"><User className="size-4"/></div>
              </div>

              <div className="rounded-full bg-neutral-100 flex items-center justify-center w-10 h-10">
                <LogOut className="size-4"/>
              </div>
            </div>

            <div className=" bg-white flex-1 h-full rounded-4xl">

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default InnrevDashboard
