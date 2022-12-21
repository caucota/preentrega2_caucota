import React from 'react'
import { useState, useEffect } from 'react';
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore';
import Item from '../Item/Item';
import "./ItemList.css";
import "../../mock.js";
import { productosVta } from '../../mock.js';

const ItemList = ({tipoProd}) => {
  const [producto, setProducto] = useState([]);

  useEffect( () => {
    const db = getFirestore();
    let prodFiltrados = [];
    if(tipoProd != ""){
      prodFiltrados = query(collection(db, "Item"), where("tipo", "==", tipoProd));
    }
    else{
      prodFiltrados = collection(db, "Item");
    }
    getDocs(prodFiltrados).then( listaProd => {
      if (listaProd.size === 0){
        alert("No hay productos disponibles"+tipoProd )
      }else{
        setProducto( listaProd.docs.map( (prod) => ({id:prod.id, ...prod.data()}) ))
      }
    })
  }, [tipoProd])

  return(
    <div className='cards__container'>
        {
          producto && producto.map(prod => {
                return <Item key={'producto_'+prod.id} unProducto={prod}/>
            }
          )
        }

    </div>    
  )

}

export default ItemList