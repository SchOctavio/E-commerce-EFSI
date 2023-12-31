import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Contacto from "./pages/contacto";
import DetalleProducto from "./pages/detalleProducto";
import Producto from "./pages/productos";
import Carrito from "./pages/carrito";
import ProductoProvider from "./context/productosContext";
import CarritoProvider from "./context/carritoContext";

function App() {

  return (
    
    //no se si el carrito provider deberia ir aca o en carrito la page
   <>
   <ProductoProvider>
    <CarritoProvider>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/contacto" element={<Contacto/>}></Route>
            <Route path="/detalleProducto/:id" element={<DetalleProducto/>}></Route>
            <Route path="/productos" element={<Producto/>}></Route>
            <Route path="/carrito" element={<Carrito/>}></Route>
          </Route>        

       </Routes>
     </BrowserRouter>
     </CarritoProvider> 
    </ProductoProvider>
 
     
    
      

    </>
    
  );
}

export default App;
