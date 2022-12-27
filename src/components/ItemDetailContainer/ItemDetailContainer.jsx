import React from 'react';
import { useState, useEffect } from 'react';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [item, setItem] = useState([]);

  useEffect(() =>{
    const db = getFirestore();
    const prodSeleccionado = doc(db, "Item",id);
    getDoc(prodSeleccionado).then((snapshot)=>{
      if(snapshot.exists()){
        setItem([{id:snapshot.id, ...snapshot.data()}]);
      }
    })
  },[id]);

  return (
    <div className='card__detail__container'>
      {item.map((itemUno, index)=> (
        <Card className="card__container" key={"Card" + itemUno.id} style={{ width: '15rem' }}>
            <Card.Img className="card__imagen" variant="top" src={itemUno.img} />
            <Card.Body className="card__body">
              <Card.Title className="card__title">{itemUno.nombre}</Card.Title>
              <Card.Text className="card__text">
                {"$" + itemUno.precio}
              </Card.Text>
              <ItemCount />
            </Card.Body>
        </Card>
        
      ) )}
    </div>
  )
}

export default ItemDetailContainer