import React from 'react'
import {Link as LinkRouter} from "react-router-dom"


const Detalles = () =>{
    return(
    <div className='imgCities'>
         <div className="d-flex align-text-center justify-content-center"> 
        <LinkRouter to="/cities" className='link'>
            <button className='botonMain mt-3'>
            RETURN TO CITIES!!
        </button>
        </LinkRouter>

    </div>
        
    </div>
    
        )
       
    }
     export default Detalles;