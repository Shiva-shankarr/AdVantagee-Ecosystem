import React from 'react';
import { Route, Routes } from 'react-router-dom';  // Import routing components
import Header from './components/Header';  // Import your Header component
import Home from './components/Home';
import Footer from './components/Footer';
import ProductsTools from './components/ProductsTools';
import WhyAdveco from './components/WhyAdveco';
import Resources from './components/Resources';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import ContactUs from './components/ContactUs';
import CommunitySpace from './components/CommunitySpace';



function App() {
  return (
    <div>
      <Header />
      <div style={{ minHeight: '55vh' }}>
        {/* Your page content will go here */}
     
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here as needed */}
        <Route path='/Products-Tools' element={<ProductsTools/>} />
        <Route path='/WhyAdveco'  element={<WhyAdveco/>} />
        <Route path='/Resources'  element={<Resources/>} />
        <Route path='/About-Us'  element={<AboutUs/>} />
        <Route path='/Careers'  element={<Careers/>} />
        <Route path='/Contact-Us'  element={<ContactUs/>} />
        <Route path='/Community-Space'  element={<CommunitySpace/>} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
