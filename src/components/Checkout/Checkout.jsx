import React, {useState}from "react";
import './Checkout.css';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import { useCartContext } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () =>{
    const navigate = useNavigate();

    const { cart, totalOrden, limpiarCarrito } = useCartContext();

    const [idOrden, setIdOrden] = useState(null);

    const [nombreComprador, setnombreComprador] = useState(null);
    const [apellidoComprador, setapellidoComprador] = useState(null);
    const [telefonoComprador, settelefonoComprador] = useState(null);
    const [email1Comprador, setemail1Comprador] = useState(null);
    const [email2Comprador, setemail2Comprador] = useState(null);

    const grabarOrden = () => {
        let sePuedeGrabar = true;
        if(email1Comprador != email2Comprador){
            sePuedeGrabar = false;
            alert("El correo ingresado no coincide con la confirmación.");
        }
        if(sePuedeGrabar && (cart==undefined || cart == null||  cart == [] || !cart.length)){
            sePuedeGrabar = false;
            alert("No hay articulos en su carrito de compra.");
        }
        if(sePuedeGrabar && (nombreComprador=='' || nombreComprador == null)){
            sePuedeGrabar = false;
            alert("Debe ingresar su Nombre.");
        }
        if(sePuedeGrabar && (apellidoComprador=='' || apellidoComprador == null)){
            sePuedeGrabar = false;
            alert("Debe ingresar su Apellido.");
        }
        if(sePuedeGrabar && (telefonoComprador=='' || telefonoComprador == null)){
            sePuedeGrabar = false;
            alert("Debe ingresar su Teléfono.");
        }
        if(sePuedeGrabar && (email1Comprador=='' || email1Comprador == null)){
            sePuedeGrabar = false;
            alert("Debe ingresar su Email.");
        }

        if(!sePuedeGrabar){
            return;
        }
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
        comprador:{ nombre: nombreComprador, apellido: apellidoComprador, phone: telefonoComprador, mail: email1Comprador },
        items: arrayFirebase,
        total: totalOrden,
        estado:"Generada",
        }
    
        const db = getFirestore();
        const ordenes = collection(db, 'ordenes');
        addDoc(ordenes, orden).then(({id}) => {
            setIdOrden(id); 
            alert("Su pedido ha sido registrado con éxito, bajo el código " + id);
            limpiarCarrito();
            volverInicio();
        }
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
        if (event.target.id == "email1"){
            setemail1Comprador(event.target.value);
        }
        if (event.target.id == "email2"){
            setemail2Comprador(event.target.value);
        }
    }

    function volverInicio (){
        navigate ('/')
    }

    return(
        <div className="container__checkout">
            <h1>Ingrese sus datos</h1>
            <div className="container__inputs">
                <input id='nombre' onBlur={setNombre} type="text" placeholder="Nombre" required />
                <input id="apellido" type="text" onBlur={setApellido} placeholder="Apellido" required/>
                <input id="telefono" type="number" onBlur={setTelefono} placeholder="Teléfono" required />
                <input id="email1" type="email" onBlur={setEmail} placeholder="Email" required/>
                <input id="email2" type="email" onBlur={setEmail} placeholder="Repetir Email" required/>
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
            <h2>Total:$ {totalOrden}</h2>
            <button onClick={(grabarOrden)}>Finalizar Compra</button>
        </div>
    )
}

export default Checkout;