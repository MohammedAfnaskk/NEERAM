import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './components/AboutPage/content';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Oilmill from './components/OilmillPage/oilmillpage';
import Contact from './components/ContactPage/contact';
import WhatsApp from './components/ContactPage/whatsapp';

function App() {
  return (
    <Router> 
    <div>
     <Navbar/>  
    </div>
    <Routes>
      <Route path='/' element={<HomePage/>}/> 
      <Route path='/about' element={<About/>}/>
      <Route path='/oilmill' element={<Oilmill/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Routes>
    <WhatsApp/>
    <Footer/>
    </Router>
  );
}

export default App
