import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"
import { productosVta } from '../../mock';
import { useState, useEffect } from 'react';

const ItemList = ({tipoProd}) => {
  const [item, setItem] = useState(productosVta);
  const FiltrarProductos = new Promise((resolve, reject)=>{
    let arrayProductosCategoria = [];
    if(tipoProd !== '' ){
        arrayProductosCategoria = productosVta.filter((prod) => prod.tipo == tipoProd)
      } else {
        arrayProductosCategoria = productosVta;
      }
      resolve(arrayProductosCategoria);
    }
  )
  useEffect( ()=>{
    FiltrarProductos.then( (response)=>{
      setItem(response)
    }).catch( err => {console.log("Error en FiltrarProductos");})
  }, [tipoProd])
  return(
    <div className='cards__container'>
        {
          item && item.map(prod => {
                return <Item key={'producto_'+prod.id} unProducto={prod}/>
            }
          )
        }

    </div>    
  )

}

export default ItemList