import React, {useState} from 'react';
import './Order.css'
import { useCartContext } from '../../Context/CartContext';


const Order = () => {
    const { cart } = useCartContext();
    const Remove = (event) =>{
        cart = cart.filter(prodEliminar => prodEliminar.id != event.target.id);
        
    }

    return (
        <>
            <h1>Carrito</h1>
            <div className='list__prod__contianer'>
                {
                    cart.map((prod,index) =>
                        <div className='lista__prod' key={"prodId"+index}>
                            <div className='flex_row_elementos'>
                                <img className='img__cart' src={prod.img} alt="" />
                                <p className='prod'>{prod.nombre}</p>
                            </div>
                            <div >
                                <h2 className='cantidad__prod'>{prod.cantidad}</h2>
                                <button id={prod.id} onClick={Remove}>Eliminar</button>
                            </div>
                        </div>
                    )
                }
            </div>
            <div>
                <button >Cancelar Compra</button>
                <button >Finalizar Compra</button>
            </div>
        </>
    )
}

export default Order;