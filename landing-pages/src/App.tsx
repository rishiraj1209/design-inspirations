import HomePage from './pages/HomePage'
import SalesPage from './pages/SalesPage'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/salesPage' element={<SalesPage/>}/>
      </Routes>
    </>
  )
}

export default App
