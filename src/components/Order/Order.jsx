import React, {useState} from 'react';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import './Order.css'
import { useCartContext } from '../../Context/CartContext';



const Order = () => {
    const [idOrden, setIdOrden] = useState(null);
    const [nombreComprador, setnombreComprador] = useState(null);
    const { cart, delProducto } = useCartContext();
    const Remove = (event) =>{
        delProducto(event.target.id);
    }

    const grabarOrden = () => {
        

        const orden = {
        comprador:{ nombre: nombreComprador, apellido: 'Perez', phone: '222', mail: 'fasdasd@adad.com', domicilio: 'asdfasdfa 33241' },
        items:[{id:1, cantidad: 2, nombre:'Pizza Mozzarella'},
        {id:2, cantidad: 2, nombre:'Lomito Simple'}],
        total: 2000
        }
    
        const db = getFirestore();
        const ordenes = collection(db, 'ordenes');
        addDoc(ordenes, orden).then(({id}) => setIdOrden(id)
        )
    }

    const setNombre = (event)=>{
        setnombreComprador(event.target.value)
    }

    return (
        <>
            <h1>Carrito</h1>
            <input id='nombre' onBlur={setNombre}></input>
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
                <button onClick={grabarOrden}>Continuar Compra</button>
            </div>
        </>
    )
}

export default Order;