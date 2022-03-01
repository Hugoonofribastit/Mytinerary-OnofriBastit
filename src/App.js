import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from '../src/components/nav/nav'; 
import Main from '../src/components/main/main'; 
import Carousel from '../src/components/carousel/carousel'
import Cities from '../src/components/cities/cities'
import Detalles from '../src/components/detalles/detalles'
import Home from '../src/components/Home/home'
import Foot from './components/foot/foot' 
import Cards from './components/cards/cards' 
import { useEffect, useState } from "react";
import axios from "axios";





const App= ()=> {
 
  
  return (
    
    <BrowserRouter>
    
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
