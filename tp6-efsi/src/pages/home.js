import react from 'react';
import { Link } from "react-router-dom";
import Carousel from '../components/carousel';
import MostrarProducto from '../components/mostrarProductos';
import ProductoProvider from '../context/productosContext';
export default function Home() {

    return (
        <>
            {/* aca abajo esta el carrousel
    <div class="col-lg-9">
                
                <div id="header-carousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active style1" >
                            <img class="img-fluid" src="imagenes//carousel-1.jpg" alt="Image"/>
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3 style2" >
                                    <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                    <h3 class="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                                    <a href="" class="btn btn-light py-2 px-3">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item style1" >
                            <img class="img-fluid" src="imagenes//carousel-2.jpg" alt="Image"/>
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3 style2" >
                                    <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                    <h3 class="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                                    <a href="" class="btn btn-light py-2 px-3">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
                        <div class="btn btn-dark style3" >
                            <span class="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </a>
                    <a class="carousel-control-next" href="#header-carousel" data-slide="next">
                        <div class="btn btn-dark style3" >
                            <span class="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </a>
                </div>
            </div>
        */}
            {/* /div>
    </div>
*/}
            
                <Carousel/>


            {/* aca abajo estan los productos*/}
            
                <MostrarProducto/>
            
        </>

    )

}