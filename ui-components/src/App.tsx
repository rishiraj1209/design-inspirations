import { Route, Routes } from "react-router-dom"
import ButtonsPage from "./pages/ButtonsPage"
import CardsPage from "./pages/CardsPage"
import HomePage from "./pages/HomePage"
import BentoGridPage from "./pages/BentoGridPage"

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<HomePage/>} path="/"/>
        <Route element={<ButtonsPage/>} path="/buttons"/>
        <Route element={<CardsPage/>} path="/cards"/>
        <Route element={<BentoGridPage/>} path="/grids"/>
      </Routes>
    </>
  )
}

export default App
