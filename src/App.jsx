import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/content";
import About from "./components/AboutPage/content";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Oilmill from "./components/OilmillPage/oilmillpage";
import Contact from "./components/ContactPage/contact";
import WhatsApp from "./components/ContactPage/whatsapp";
function App() {
  return (
    <Router>
         <Navbar />
        <main >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/oilmill" element={<Oilmill />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <WhatsApp />
        <Footer />
     </Router>
  );
}

 

export default App;
