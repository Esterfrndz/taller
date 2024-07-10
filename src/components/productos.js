import React, { Component } from 'react';
import './inicio.css';



const Productos= () => {
  return (
   <div className='container-productos'> 


    <div className='titulo-productos'> <h2>Productos y prestaciones</h2> <hr className='solid'></hr></div>

    <div className='lista-productos'>
    <ul>

{/* Product 1 */}
    <li>
        <a>
            <div className='product-icon'></div>
            <p className='product-name'>Ofertas</p>
        </a>
    </li>

{/* Product 2 */}

    <li>
    <a>
            <div className='product-icon'></div>
            <p className='product-name'></p>
        </a>

    </li>

{/* Product 3 */}
    <li>
    <a>
            <div className='product-icon'></div>
            <p className='product-name'>Cita Taller</p>
        </a>

    </li>

{/* Product 4 */}
    <li>
    <a>
            <div className='product-icon'></div>
            <p className='product-name'>Frenado</p>
        </a>

    </li>

{/* Product 5 */}

    <li>

    <a>
            <div className='product-icon'></div>
            <p className='product-name'>Mi coche</p>
        </a>


    </li>


    {/* Product 6 */}
    <li>

    <a>
            <div className='product-icon'></div>
            <p className='product-name'>Transporte</p>
        </a>


    </li>

{/* Product 2 */}

<li>
    <a>
            <div className='product-icon'></div>
            <p className='product-name'>Bicicletas,patinetes,motos</p>
        </a>

    </li>


    </ul>
    


    </div>
   </div>
  );
};

export default Productos;
