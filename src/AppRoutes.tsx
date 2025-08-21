import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sim from './pages/Sim/Sim'
import Inicial from './pages/Inicial'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicial/>}/>
            <Route path='/sim' element={<Sim/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
