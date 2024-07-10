import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './inicio.css';
import Grid from './grid';
import Productos from './productos';
import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider2.png';
import slider3 from '../assets/slider3.jpg';
import slider4 from '../assets/slider4.jpg';






const Inicio = () => {
  return (
    <div className='container-inicio'>

    {/* Carousel */}

    <div className='carousel'>
        <Carousel>
          <Carousel.Item className='item'>
            <img
              className="slider1"
              src={slider1}
              alt="slider1"
            />
            
          </Carousel.Item>
          <Carousel.Item className='item'>
            <img
              className=""
              src={slider2}
              alt="Second slide"
            />
           
          </Carousel.Item>
          <Carousel.Item className='item'>
            <img
              className=""
              src={slider3}
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

    {/* Grid */}

      <Grid/>

    {/* Productos */}

    <Productos/>
      
    </div>
  );
};

export default Inicio;



