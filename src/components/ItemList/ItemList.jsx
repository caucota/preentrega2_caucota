import React from 'react'
import { useState, useEffect } from 'react';
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore';
import Item from '../Item/Item'
import "./ItemList.css"

const ItemList = ({tipoProd}) => {
  const [producto, setProducto] = useState([]);

  useEffect( () => {
    const db = getFirestore();
    const prodFiltrados = query(collection(db, "Item"), where("tipo", "==", tipoProd));
    getDocs(prodFiltrados).then( listaProd => {
      if (listaProd.size === 0){
        alert("No hay productos disponibles" )
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