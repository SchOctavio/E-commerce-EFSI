import react from 'react';
import { Link, Outlet } from "react-router-dom";

export default function ProductoCard(producto) {
    console.log("entre al producto card")
    console.log("producto", producto.producto);
    
    const { id, title, description, price, category, images } = producto.producto;
    console.log(title);
    return (
        <>
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="card product-item border-0 mb-4">
                    <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img class="img-fluid w-100" src={images} alt="" />
                    </div>
                    <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 class="text-truncate mb-3">{title}</h6>
                        <div class="d-flex justify-content-center">
                            <h6>${price}</h6><h6 class="text-muted ml-2"><del>{/* aca va el descuento*/}</del></h6>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light border">
                        <Link to={"/detalleProducto/"+ id}  class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                        <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
        </>

    )

}