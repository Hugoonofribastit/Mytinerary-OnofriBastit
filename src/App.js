import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from '../src/components/nav/nav'; 
import Cities from '../src/components/cities/cities'
import Detalles from '../src/components/detalles/detalles'
import Home from '../src/components/Home/home'
import Foot from './components/foot/foot' 
import ScrollToTop from './components/Scrolltotop/Scrolltotop' 





const App= ()=> {
 
  
  return (
    
    <BrowserRouter>
    <ScrollToTop/>
      <Nav/>
   
          <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/cities" element={<Cities/>}/>
          <Route path="/detalles" element={<Detalles/>}/>
      
          </Routes>
  
      <Foot/>
  
    
    </BrowserRouter>
    
    
  );
}

export default App;
