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
          <Carousel cols={2} rows={2} gap={10} loop
                  responsiveLayout={[
                    {
                      breakpoint: 1200,
                      cols: 2,
                      rows: 2,
                      
                    },
                    {
                      breakpoint: 985,
                      cols: 1,
                    },
                  
                  ]}
                  mobileBreakpoint={500}
                  >
                  {datos.map(evento =>
                  <Carousel.Item>
                    <div className="image" >
                  <img className="image__img" src={process.env.PUBLIC_URL+ `/imagenes/${evento.image}`} />
                  <div class="image__overlay image__overlay--primary">
                    <div class="image__title">{evento.name}</div>
                    
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