import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar/Navbar'
import BirdsIndex from './components/BirdsIndex/BirdsIndex'
import BirdsShow from './components/BirdsShow/BirdsShow'
import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/birds' element={<BirdsIndex />}/>
        <Route path='/birds/:birdId' element={<BirdsShow />}/>
      </Routes>
    </>
  )
}

export default App
