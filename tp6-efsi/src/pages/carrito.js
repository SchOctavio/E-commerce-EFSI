import React, { useContext, useEffect } from 'react'
import InfoProducto from "../components/infoProducto";
import DescripcionProducto from "../components/descripcionProducto";
import { ProductoContext } from '../context/productosContext';
import { useParams } from 'react-router-dom';
import CarritoProducts from '../components/carritoProducts';
import CarritoTotal from '../components/carritoTotal';
import { CarritoContext } from '../context/carritoContext';

export default function Carrito() {
  const { productosCarrito, agregarProducto } = useContext(CarritoContext);
  console.log("productosCarrito:", productosCarrito);
    
  return (
        <>
        {!productosCarrito ? (
        <div>loading</div>
):(
      <div class="site-wrap">
    

    {/*aca va el titulo de la pagina en la que estamos (carrito) */}

    <div class="site-section">
      <div class="container">
        <CarritoProducts productos={productosCarrito} />

        <CarritoTotal productos={productosCarrito}/>
      </div>
    </div>

    
  </div>
)}
      </>

    )

}