import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './inicio.css';




const Inicio = () => {
  return (
    <div className='container'>

    {/* Carousel */}

    <div className='carousel'>
        <Carousel>
          <Carousel.Item className='item'>
            <img
              className=""
              src="https://via.placeholder.com/800x400?text=First+slide"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='item'>
            <img
              className=""
              src="https://via.placeholder.com/800x400?text=Second+slide"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='item'>
            <img
              className=""
              src="https://via.placeholder.com/800x400?text=Third+slide"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>




      
    </div>
  );
};

export default Inicio;



