import React, {useState}from "react";
import './Checkout.css';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import { useCartContext } from '../../Context/CartContext';

const Checkout = () =>{
    
    const { cart, totalOrden } = useCartContext();

    const [idOrden, setIdOrden] = useState(null);

    const [nombreComprador, setnombreComprador] = useState(null);
    const [apellidoComprador, setapellidoComprador] = useState(null);
    const [telefonoComprador, settelefonoComprador] = useState(null);
    const [emailComprador, setemailComprador] = useState(null);

    const grabarOrden = () => {
        const arrayFirebase = [];
        cart.forEach((prod) => {
            arrayFirebase.push({id: prod.id, tipo: prod.tipo ,nombre: prod.nombre, descripcion: prod.descripcion, precio: prod.precio, cantidad: prod.cantidad});
        })

        let fecha = new Date();
        let dia = fecha.getDate();
        let mes = fecha.getMonth() + 1;
        let año = fecha.getFullYear();
        const fechaActual = (dia + '/' + mes + '/' + año);

        const orden = {
        fecha: fechaActual,
        comprador:{ nombre: nombreComprador, apellido: apellidoComprador, phone: telefonoComprador, mail: emailComprador },
        items: arrayFirebase,
        total: totalOrden,
        estado:"Generada",
        }
    
        const db = getFirestore();
        const ordenes = collection(db, 'ordenes');
        addDoc(ordenes, orden).then(({id}) => {setIdOrden(id); alert("Su pedido ha sido registrado con éxito, bajo el código " + id)}
        )
    }

    const setNombre = (event)=>{
        setnombreComprador(event.target.value)
    }
    const setApellido = (event)=>{
        setapellidoComprador(event.target.value)
    }
    const setTelefono = (event)=>{
        settelefonoComprador(event.target.value)
    }
    const setEmail = (event)=>{
        setemailComprador(event.target.value)
    }


    return(
        <div className="container__checkout">
            <h1>Ingrese sus datos</h1>
            <div className="container__inputs">
                <input id='nombre' onBlur={setNombre} type="text" placeholder="Nombre"/>
                <input id="apellido" type="text" onBlur={setApellido} placeholder="Apellido"/>
                <input id="telefono" type="number" onBlur={setTelefono} placeholder="Teléfono"/>
                <input id="email1" type="email" onBlur={setEmail} placeholder="Email"/>
                {/* <input id="email2" type="email" placeholder="Repetir Email"/> */}
            </div>
            <div className='list__prod__contianer'>
                {
                    cart.map((prod,index) =>
                    <div className='lista__prod' key={"prodId"+index}>
                        <div className='flex_row_elementos'>
                            <img className='img__cart' src={prod.img} alt="" />
                            <p className='prod'>{prod.nombre}</p>
                        </div>
                        <div className='cantidad__checkout'>
                            <p>Cantidad: </p>
                            <span className='cantidad__prod'>{prod.cantidad}</span>
                        </div>
                    </div>
                )
                }
            </div>
            <h2>Total: {totalOrden}</h2>
            <button onClick={grabarOrden}>Finalizar Compra</button>
        </div>
    )
}

export default Checkout;