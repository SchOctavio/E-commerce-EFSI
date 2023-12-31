import react from 'react';
import FiltrarOpciones from './filtrarOpciones';
import { Link, Outlet } from "react-router-dom";
import { CategoriaContext } from '../context/categoriasContext';
import { ProductoContext } from '../context/productosContext';
import React, { useContext, useEffect } from 'react'
import ProductoCard from './productoCard';
export default function FiltrarProducto() {
    const {selectedCategory} = useContext(CategoriaContext);
    const {productosFiltrados, getProductosByCategoria} =  useContext(ProductoContext);
    useEffect(() => {
        getProductosByCategoria(selectedCategory);
   },[selectedCategory]); 
    return(
<>
<div class="container-fluid pt-5">
        <div class="row px-xl-5">
            <FiltrarOpciones/>


            {/* Shop Product Start */}
            <div class="col-lg-9 col-md-12">
                <div class="row pb-3">
                    <div class="col-12 pb-1">
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <form action="">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search by name"/>
                                    <div class="input-group-append">
                                        <span class="input-group-text bg-transparent text-primary">
                                            <i class="fa fa-search"></i>
                                        </span>
                                    </div>
                                </div>
                            </form>
                            {/*<div class="dropdown ml-4">
                                <button class="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                            Sort by
                                        </button>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                                    <a class="dropdown-item" href="#">Latest</a>
                                    <a class="dropdown-item" href="#">Popularity</a>
                                    <a class="dropdown-item" href="#">Best Rating</a>
                                </div>
                            </div>
                             */}
                        </div>
                    </div>
                    
                    {
                        productosFiltrados.map((prod) => (
                        <div class="col-lg-4 col-md-6 col-sm-12 pb-1">
                        <ProductoCard producto={prod}/>
                        </div>
                        ))
                    }                    
                    
                        
                    
                   
                    <div class="col-12 pb-1">
                        <nav aria-label="Page navigation">
                          <ul class="pagination justify-content-center mb-3">
                            <li class="page-item disabled">
                              <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                              </a>
                            </li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                              <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Shop Product End */}
        </div>
    </div>
</>

)

}