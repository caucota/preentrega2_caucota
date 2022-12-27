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