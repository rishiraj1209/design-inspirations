import { Route, Routes } from "react-router-dom"
import ButtonsPage from "./pages/ButtonsPage"
import CardsPage from "./pages/CardsPage"
import HomePage from "./pages/HomePage"
import BentoGridPage from "./pages/BentoGridPage"
import NavbarPage from "./pages/NavbarPage"
import ModalsPage from "./pages/ModalsPage"
import SearchBarPage from "./pages/SearchBarPage"

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<HomePage/>} path="/"/>
        <Route element={<ButtonsPage/>} path="/buttons"/>
        <Route element={<CardsPage/>} path="/cards"/>
        <Route element={<BentoGridPage/>} path="/grids"/>
        <Route element={<NavbarPage/>} path="/navbars"/>
        <Route element={<ModalsPage/>} path="/modals"/>
        <Route element={<SearchBarPage/>} path="/searchBar"/>
      </Routes>
    </>
  )
}

export default App
