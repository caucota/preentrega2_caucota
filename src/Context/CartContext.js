import {createContext, useState, useContext} from 'react'

const CartContext = createContext()

const useCartContext = () =>{
    return useContext(CartContext);
}

const CartContextProvider = ({children}) =>{
        const [cart, setCart]=useState([]);
        const [totalOrden, setTotalOrden] = useState(0);
        /* const [cantTotal, setcantTotal] = useState(0); */

    const addProducto = (item, cantidad)=> {
            let nuevoArray;
            let elemento = cart.find(producto => producto.id === item.id);
            if(elemento){
                elemento.cantidad += cantidad;
                nuevoArray = [...cart];
            }else{
                elemento = {...item, cantidad:cantidad};
                nuevoArray = [...cart, elemento];
            }
            setTotalOrden(totalOrden + (item.precio*cantidad));
            setCart(nuevoArray);
            /* setCart([...cart, {...item,cantidad}]); */
            /* setcantTotal(cantTotal+cantidad); */
        }
    const delProducto = (id)=> {
        const articuloAEliminar = cart.filter((prodAeliminar) => prodAeliminar.id == id);
        setTotalOrden(totalOrden - (articuloAEliminar[0].precio*articuloAEliminar[0].cantidad));
        setCart(cart.filter( (prodEliminar) => prodEliminar.id != id));
    }
    const limpiarCarrito = () => {setCart([]); setTotalOrden(0)};

    return(
        <CartContext.Provider
        value={{
            cart,
            /* cantTotal, */
            totalOrden,
            addProducto,
            delProducto,
            limpiarCarrito
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

export{
    CartContext,
    useCartContext,
    CartContextProvider,

}



/*


import {createContext, useReducer, useContext} from 'react'
import { CartReducer } from './CartReducer'

const CartContext = createContext(null)

const useCartContext = () =>{
    return useContext(CartContext);
}

const initialState = {
    cantidad: 0,
}

const CartContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(CartReducer, initialState);

    function addProducto(cantidad){
        dispatch({
            type:"ADD_PRODUCT", 
            cantidad: cantidad
        })
    }

    return(
        <CartContext.Provider
        value={{
            cantidad: state.cantidad,
            addProducto
        }}
        >
            {children}
        </CartContext.Provider>
    )

}

export{
    CartContext,
    CartContextProvider,
    useCartContext,
}
*/

/* const initialState = {
    count: 0,
    producto:{},
    listaProducto:[]
}

export const CartContextProvider =({children}) =>{
    const [state,dispatch] = useReducer(CartReducer,initialState)

    function addCount(count,producto){
        dispatch({
            type:"ADD_ITEMS",
            payload:{count,producto}
        })
    }


    return(
        <CartContext.Provider
        value={{
            count:state.count,
            producto:state.producto,
            listaProducto:state.listaProducto,
            addCount,
        }}
        >
            {children}
        </CartContext.Provider>
    )
} */