import React from 'react';
import logofoot from "../assets/logo.png";
import {Link as LinkRouter} from "react-router-dom"


const Foot = () =>{
return(
<div>
<div className='d-flex p-5 justify-content-between piedepagina align-items-center'>
<img className="logofoot" src={logofoot} alt="img"/>

<div className="text-white">
    <h2 className="mb-5">Contacto</h2>
    <p>+5491157689978</p>
    <p>0810-555-4698</p>
    mytinerary@contacto.mh.org    
</div> 

<div className="text-white me-3">
<h2 className="mb-5 mt-3">Navigation</h2>
       <div className='d-flex flex-column'>
       <LinkRouter to="/" className='link'>
        <button className='botonNav'>
           HOME
        </button>
        </LinkRouter>
        <LinkRouter to="cities" className='link'>
        <button className='botonNav'>
           CITIES
        </button>
        </LinkRouter>
       </div>
        
</div>
  
</div>
<div className='navnav d-flex justify-content-center align-items-center pt-1'>
<p className='text-white'> Copyright. © 2022  | Hugo Onofri Bastit </p>
</div>
</div>
    )
}
 export default Foot;