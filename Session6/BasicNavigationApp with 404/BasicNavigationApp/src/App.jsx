import './App.css'
import { Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import NotFound from './Components/NotFound'


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={ <NotFound/>} />
      </Routes>
   </div>
  )
}

export default App
