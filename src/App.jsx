import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar/Navbar'
import BirdsIndex from './components/BirdsIndex/BirdsIndex'
import BirdsShow from './components/BirdsShow/BirdsShow'
import BirdsCreate from './components/BirdsCreate/BirdsCreate'
import BirdsEdit from './components/BirdsEdit/BirdsEdit'
import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/birds' element={<BirdsIndex />}/>
        <Route path='/birds/new' element={<BirdsCreate />}/>
        <Route path='/birds/:birdId' element={<BirdsShow />}/>
        <Route path='/birds/:birdId/edit' element={<BirdsEdit />}/>
      </Routes>
    </>
  )
}

export default App
