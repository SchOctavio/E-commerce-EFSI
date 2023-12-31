import react from 'react';
import React, { useContext } from 'react'
import { Link, Outlet } from "react-router-dom";
import { ProductoContext } from '../context/productosContext';
import ProductoCard from './productoCard';
export default function  MostrarProducto() {
    {/*useEffect(() => {
        console.log("el id que me esta llegando", id);
        getProductosById(id);        
    },[productos]);*/}
    
    const {productos} =  useContext(ProductoContext);
    //console.log("productos: ",productos);
    //console.log(productos);
    return(
<>
<div class="container-fluid pt-5">
                <div class="text-center mb-4">
                    <h2 class="section-title px-5"><span class="px-2">Trandy Products</span></h2>
                </div>
                <div class="row px-xl-5 pb-3">
                    {
                        productos.map((prod) => (
                        <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <ProductoCard producto={prod}/>
                        </div>
                        ))
                    }                    
                </div>
            </div>

        </>

    )





}