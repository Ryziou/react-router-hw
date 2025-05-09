import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar/Navbar'
import BirdsIndex from './components/BirdsIndex/BirdsIndex'
import BirdsShow from './components/BirdsShow/BirdsShow'
import BirdsCreate from './components/BirdsCreate/BirdsCreate'
import BirdsEdit from './components/BirdsEdit/BirdsEdit'
import BirdsUser from './components/BirdsUser/BirdsUser'
import BirdsSignIn from './components/BirdsSignIn/BirdsSignIn'
import SplashPage from './components/SplashPage/SplashPage'
import HomePage from './components/HomePage/HomePage'
import './App.css'

import { useContext } from 'react' 
import { UserContext } from './contexts/UserContext'

function App() {

  const { user } = useContext(UserContext)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/birds' element={<BirdsIndex />}/>
        <Route path='/birds/:birdId' element={<BirdsShow />}/>
        { user 
          ? (
            <>
            <Route path='/loggedin' element={<SplashPage />}/>
            <Route path='/birds/new' element={<BirdsCreate />}/>
            <Route path='/birds/:birdId/edit' element={<BirdsEdit />}/>
            </>
          )
          : (
            <>
            <Route path='/register' element={<BirdsUser />}/>
            <Route path='/signin' element={<BirdsSignIn />}/>
            </>
          )
        }

      </Routes>
    </>
  )
}

export default App
