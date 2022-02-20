import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from '../src/components/nav/nav'; 
import Main from '../src/components/main/main'; 
import Carousel from '../src/components/carousel/carousel'
import Cities from '../src/components/cities/cities'
import Home from '../src/components/Home/home'
import Foot from './components/foot/foot' 


/* const Header=() =><p>Hola,soy un header</p>;

const Main= ()=> <p>Hola desde el main 🙌</p>; */


const App= ()=> {

  return (
    
    <BrowserRouter>
    
      <Nav/>
   
          <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/cities" element={<Cities/>}/>        
          </Routes>
  
      <Foot/>
  
    
    </BrowserRouter>
    
    
  );
}

export default App;
