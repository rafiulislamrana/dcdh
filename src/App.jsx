import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Shared/Header'
import Footer from './components/Shared/Footer'

function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
