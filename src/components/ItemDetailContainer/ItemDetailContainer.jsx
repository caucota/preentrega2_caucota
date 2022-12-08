import React from 'react';
import { productosVta } from '../../mock';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useEffect } from 'react';
//import Item from '../Item/Item';

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [item, setItem] = useState(productosVta);
  const FiltrarProductoSeleccionado = new Promise ((resolve, reject)=>{
    let productoSeleccionado = [];
    if (id !== null){
      productoSeleccionado = productosVta.filter(prod => prod.id == id);
    }
    resolve(productoSeleccionado);
    
  })
  useEffect( ()=>{
    FiltrarProductoSeleccionado.then( (response)=>{
      setItem(response)
    }).catch( err => {console.log("Error en el filtro de productoSeleccionado");})
  }, [id])
  return (
    <div className='card__detail__container'>
      <Card className="card__container" key={"Card" + item[0].id} style={{ width: '15rem' }}>
          <Card.Img className="card__imagen" variant="top" src={item[0].img} />
          <Card.Body className="card__body">
            <Card.Title className="card__title">{item[0].nombre}</Card.Title>
            <Card.Text className="card__text">
              {"$" + item[0].precio}
            </Card.Text>
            <ItemCount />
          </Card.Body>
      </Card>
    </div>
  )
}

export default ItemDetailContainer