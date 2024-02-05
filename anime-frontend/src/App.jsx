import './App.css'
import Favorite from './components/favorites/Favorite'
import Searcher from './components/searcher/Searcher'
import Home from './pages/home/Home'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>} >
          <Route path='/' element={<Navigate to="/home"></Navigate>}></Route>
          <Route path='home' element={<Searcher></Searcher>}></Route>
          <Route path='favorite' element={<Favorite></Favorite>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
