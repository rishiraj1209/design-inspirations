import OnhoverNavbar from "../components/Navbars/OnhoverNavbar/OnhoverNavbar"
import TabSelect from "../components/Navbars/tabSelectNavbar/TabSelect"


const NavbarPage = () => {
  return (
    <div className="min-h-screen p-8 w-full">
      <h1 className="text-4xl leading-tight text-transparent bg-clip-text font-bold bg-linear-to-b from-zinc-800 via-zinc-500 to-zinc-800 text-shadow-md">Navbars</h1>
      <p className="text-xl text-shadow-sm text-neutral-600">A curated list of awesome, Navbar components</p>
      <div className="min-h-screen mt-8 space-y-10">
        {/* OnHover Navbar */}
        <div className="bg-zinc-200 border border-zinc-300 rounded-lg px-4 py-4 max-w-5xl mx-auto bg-[repeating-linear-gradient(-45deg,#f4f4f5_0px,#f4f4f5_1px,transparent_2px,transparent_4px)]">
          <OnhoverNavbar/>
        </div>

        {/* Tab Slect Navbar using layoutId */}
        <div className=" bg-zinc-200 border border-zinc-300 rounded-lg px-4 py-4 max-w-5xl mx-auto bg-[radial-gradient(var(--color-zinc-400)_1px,transparent_1px)] bg-size-[4px_4px]">
          <TabSelect/>
        </div>
      </div>
    </div>
  )
}

export default NavbarPage
