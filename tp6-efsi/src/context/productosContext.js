import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const ProductoContext = createContext();

const ProductoProvider = (props) => {
    const [productos, setProductos] = useState([]);
    const [producto, setProducto] = useState({});
    const getProductos = async () => {
        await axios
            .get("https://dummyjson.com/products")
            .then((result) => {

                setProductos(result.data.products);
                
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const getProductosById = async (id) => {
        console.log("llegue al getProductosById");
        await axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((result) => {
                
                setProducto(result.data);
                console.log("producto recien obtenido con el id:", producto)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const getProductosByCategoria = async (categoria) => {
        if (categoria == null) {
            await getProductos();
        }
        else {
            await axios
                .get(`https://dummyjson.com/products/category/${categoria}`)
                .then((result) => {
                    console.log("llegue al getProductosByCategoria")
                    setProductos(result.data.products);

                })
                .catch((error) => {
                    console.log(error);
                });
        }
}

    useEffect(() => {
        console.log('se va a cargar los productos');
        getProductos();
        console.log(productos)
    }, []);

    return (
        <ProductoContext.Provider
            value={{
                productos,
                producto,
                getProductos,
                getProductosById,
                getProductosByCategoria
            }}
        >
            {props.children}
        </ProductoContext.Provider>
    )
}

export default ProductoProvider;
