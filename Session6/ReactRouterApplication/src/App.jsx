import './App.css'
import { Routes, Route} from 'react-router-dom'
import Contact from './Components/Contact'
import Home from './Components/Home'
import PageNotFound from './Components/PageNotFound'
import Quotes from './Components/Quotes'
import Sidebar from './Components/Sidebar'
import UserDetails from './Components/UserDetails'
import Users from './Components/Users'

function App() {

  return (
    <div className='layout'>
      <Sidebar />
      <div className='content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={ <Users/>} />
        <Route path='/users/:id' element={ <UserDetails/>} />
        <Route path='/quotes' element={ <Quotes/>} />
        <Route path='/contact' element={ <Contact/>} />
        <Route path='*' element={ <PageNotFound/>} />
        </Routes>
        </div>
    </div>
  )
}

export default App
