import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <div>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}

export default App
