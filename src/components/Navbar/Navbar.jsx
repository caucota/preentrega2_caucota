import './Navbar.css';
import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import CartWidget from '../CartWidget/CartWidget';
import { useEffect, useState } from 'react';

const NavBar = () => {

    const [categorias, setCategorias] = useState([]);
    useEffect(()=>{
        const db = getFirestore();
        const collectionCategorias = collection(db, "categorias");
        getDocs(collectionCategorias).then(result => {
            if(result.size === 0){
                alert("Sin categorías definidas")
            }
            else{
                setCategorias(result.docs.map( (doc)=>({id:doc.id, ...doc.data()})))
            }
        })
    },[]
    
    )

    return(
        <div className='navbar'>
            <Link className="brand" to="/">Pizzería Il Mondo</Link>            
            <div className='opciones__menu'>
                {
                    categorias.map((opcion, index)=>{
                        return <Link key={'opMenu'+index} className='navbar__menu' to={opcion.href+'/'+opcion.nombre}>{opcion.nombre}</Link>
                    })
                }
            </div>
            <CartWidget />
        </div>
    )
}

export default NavBar;