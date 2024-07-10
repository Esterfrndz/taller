import React, { Component } from 'react';
import './inicio.css';

import Grid1 from '../assets/grid1.jpg';

const Grid = () => {
  return (
    <div className="container-grid">
       <div className='titulo-grid'> <h2>Nuestras ofertas</h2> <div className='solid'><hr></hr></div></div>
      <div className="grid1">
        <div>
          <img src={Grid1} class="img-fluid rounded-top" alt="" />
        </div>

        <div>
          <img src={Grid1} class="img-fluid rounded-top" alt="" />
        </div>

        <div>
          <img src={Grid1} class="img-fluid rounded-top" alt="" />
        </div>

        <div>
          <img src={Grid1} class="img-fluid rounded-top" alt="" />
        </div>
      </div>

        <div className='grid2'>

        <div>
          <img src={Grid1} class="img-fluid rounded-top" alt="" />
        </div>

        <div>
          <img src={Grid1} class="img-fluid rounded-top" alt="" />
        </div>
            



        </div>





    </div>
  );
};

export default Grid;
