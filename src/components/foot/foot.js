import React from 'react';
import logofoot from "../assets/logo.png";
import * as ReactBootstrap from "react-bootstrap";


const Foot = () =>{
return(
<div>
<div className='d-flex p-5 justify-content-between piedepagina align-items-center'>
<img className="logofoot" src={logofoot} />

<div className="text-white">
    <h2 className="mb-5">Contacto</h2>
    <p>+5491157689978</p>
    <p>0810-555-4698</p>
    mytinerary@contacto.mh.org    
</div> 

<div className="text-white me-3">
<h2 className="mb-5 mt-3">Policies</h2>
<p>Legal Warning</p>
<p>Privacy Policy</p>
<p>Cookies Policy</p>
<p>Quality Policy</p>
</div>
  
</div>
<div className='navnav d-flex justify-content-center align-items-center pt-1'>
<p className='text-white'> Copyright. © 2022  | Hugo Onofri Bastit </p>
</div>
</div>
    )
}
 export default Foot;