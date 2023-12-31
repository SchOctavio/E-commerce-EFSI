import react, {useContext} from 'react';
import { CarritoContext } from '../context/carritoContext';
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function ProductoCard({producto}) {
    //console.log("producto", producto.producto);
    const navigate = useNavigate ();
    const { id, title, price, images } = producto;
    console.log("el id es", id);
    console.log(images);
    console.log(title);
    const {agregarProducto} = useContext(CarritoContext);
    const handleOnClick = async ()=>{
        await agregarProducto(producto);
        navigate("/carrito");
    }
    return (
        <>
            
                <div class="card product-item border-0 mb-4">
                    <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img class="img-fluid w-100" src={images[0]} alt="" />
                    </div>
                    <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 class="text-truncate mb-3">{title}</h6>
                        <div class="d-flex justify-content-center">
                            <h6>${price}</h6><h6 class="text-muted ml-2"><del>{/* aca va el descuento*/}</del></h6>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light border">
                        <Link to={`/detalleProducto/${id}`}   class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                        <button onClick={handleOnClick} class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</button>
                    </div>
                </div>
            
        </>

    )

}