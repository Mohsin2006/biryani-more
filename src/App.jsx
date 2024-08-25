import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Footer from './component/Footer/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Contact from './Pages/Contact/Contact'


const App = () => {
  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>

     </Routes>
     
      <Footer/>
    </BrowserRouter>
 
    
   
   
  )
}

export default App
