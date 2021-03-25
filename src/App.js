import React from 'react'
import './App.css';
import Aboutus from './component/AboutUs/AboutUs'
import Nav from './component/Navbar/Navbar';
import Product from './component/Product/Product';
import Home from './component/Home/Home';
import OurCollob from './component/OurCollab/OurCollab';
import Contact from './component/ContactUs/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Aboutus />
      <Product />
      <OurCollob />
      <Contact />
    </div>
  );
}

export default App;
