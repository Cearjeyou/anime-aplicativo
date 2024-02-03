import './App.css'
import Slider from './components/slider/Slider'
import Home from './pages/home/Home'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>} >
          <Route path='/' element={<Navigate to="/home"></Navigate>}></Route>
          <Route path='home' element={<Slider></Slider>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
