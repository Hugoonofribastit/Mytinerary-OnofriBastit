import React from 'react'
import Carousel from 'react-grid-carousel'
import {Col,Row, Container} from "react-bootstrap";
import datos from "../datos"

 const Carrousel = () => {
  return (
  <>
  
    <Container>
      <Row className="justify-content-center align-items-center mt-5">
        <Col><h1 className='text-center textCarr'>Popular Japan destinations</h1></Col>
      </Row>
      <Row className="justify-content-center mt-5 mb-5">
        <Col>
          <Carousel cols={2} rows={2} gap={10} autoplay={3000} loop
                  responsiveLayout={[
                    {
                      breakpoint: 1200,
                      cols: 2,
                      rows: 2,
                      loop: true,
                      autoplay: 2500,
                     
                      
                    },
                    {
                      breakpoint: 985,
                      cols: 1,
                      rows:4,
                      loop: true,
                      autoplay:2500,
                      
                      
                    },

                    {
                      breakpoint: 500,
                      cols: 1,
                      rows:4,
                      loop: true,
                      autoplay:2500,
                      
                      
                    },
                  
                  ]}
                  mobileBreakpoint={300} 
                  >
                  {datos.map(evento =>
                  <Carousel.Item key={evento.id}>
                    <div className="image" >
                  <img className="image__img" src={process.env.PUBLIC_URL+ `/imagenes/${evento.image}`} alt="img" />
                  <div className="image__overlay image__overlay--primary">
                    <div className="image__title">{evento.name}</div>
                    
                    </div>
                </div>
                  </Carousel.Item>
                )}
            </Carousel>
        </Col>
      </Row>
    </Container>
    </>
  )
  
}
export default Carrousel;