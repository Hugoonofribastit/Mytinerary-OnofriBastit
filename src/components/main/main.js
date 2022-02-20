import React from 'react'
import {Col,Row, Container, Button} from "react-bootstrap";
import {Link as LinkRouter} from "react-router-dom"

const Main = () =>{
return(
<div className='d-flex flex-column justify-content-end imgMain align-items-center p-5'>
    
    <div>
            <p className='text-white mb-5 textoinicio'>Find your perfect trip,
designed by insiders who know and love their cities.</p>
            </div>
    
    <div>
        <LinkRouter to="cities" className='link'>
            <button className='botonMain'>
            Choose your dream japanese destination now!!
        </button>
        </LinkRouter>

    </div>
</div>
    )
}
 export default Main;