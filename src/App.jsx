import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar/Navbar'
import BirdsIndex from './components/BirdsIndex/BirdsIndex'
import BirdsShow from './components/BirdsShow/BirdsShow'
import BirdsCreate from './components/BirdsCreate/BirdsCreate'
import BirdsEdit from './components/BirdsEdit/BirdsEdit'
import BirdsUser from './components/BirdsUser/BirdsUser'
import BirdsSignIn from './components/BirdsSignIn/BirdsSignIn'
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
        <Route path='/register' element={<BirdsUser />}/>
        <Route path='/signin' element={<BirdsSignIn />}/>
      </Routes>
    </>
  )
}

export default App
