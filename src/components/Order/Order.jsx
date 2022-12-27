import React from 'react';
import './Order.css'

import { useCartContext } from '../../Context/CartContext';


const Order = () =>{
    const {cart} = useCartContext();
  
    return(
        <>
            <h1>Carrito</h1>
            <ul>
            {
                cart.map((prod, index)=>  {
                <li key={index}>{prod.nombre}</li>;
             } )
            }
            </ul>
        </>

    )
}

export default Order;