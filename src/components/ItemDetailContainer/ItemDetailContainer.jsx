import React from 'react';
import { useState, useEffect } from 'react';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
//import Item from '../Item/Item';

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [item, setItem] = useState([]);
  useEffect(() =>{
    const db = getFirestore();
    const prodSeleccionado = doc(db, "Item",id);
    getDoc(prodSeleccionado).then((snapshot)=>{
      if(snapshot.exists()){
        setItem([snapshot.data()]);
        console.log("item " + snapshot.data());
      }
    })
  },[id]);
/*
  const FiltrarProductoSeleccionado = new Promise ((resolve, reject)=>{
    let productoSeleccionado = [];
    if (id !== null){
      const db = getFirestore();
      productoSeleccionado = doc(db, "Item",id);
      getDoc(productoSeleccionado).then((snapshot)=>{
        if(snapshot.exists()){
          setItem([snapshot.data()]);
        }
      })
  
    }
    resolve(productoSeleccionado);
    
  })

  useEffect( ()=>{
    FiltrarProductoSeleccionado.then( (response)=>{
      console.log(response);
    }).catch( err => {console.log("Error en el filtro de productoSeleccionado");})
  }, [id])
  */
  /*
  useEffect(() =>{
    const db = getFirestore();
    const prodSeleccionado = doc(db, "Item",id);
    getDoc(prodSeleccionado).then((snapshot)=>{
      if(snapshot.exists()){
        setItem({id:snapshot.id, ...snapshot.data() });
        console.log("item " + snapshot.id);
      }
    })
  },[]);
*/
/*
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

  */
  return (
    <div className='card__detail__container'>
      {/*
      <Card className="card__container" key={"Card" + item[0].id} style={{ width: '15rem' }}>
          <Card.Img className="card__imagen" variant="top" src={item.img} />
          <Card.Body className="card__body">
            <Card.Title className="card__title">{item.nombre}</Card.Title>
            <Card.Text className="card__text">
              {"$" + item.precio}
            </Card.Text>
            <ItemCount />
          </Card.Body>
      </Card>
  */}
    {item.map((itemUno, index)=> (
      <h1 key={index} >aaa {itemUno.nombre}</h1>
      
    ) )}
      <h1>ddd</h1>
    </div>
  )
}

export default ItemDetailContainer