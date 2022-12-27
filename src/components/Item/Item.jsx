import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Item.css";

const Item = ({ unProducto }) => {
  return (
    <>
      <Card className="card__container" key={"Card" + unProducto.id} style={{ width: '15rem' }}>
        <Card.Img className="card__imagen" variant="top" src={unProducto.img} />
        <Card.Body className="card__body">
          <Card.Title className="card__title">{unProducto.nombre}</Card.Title>
          <Card.Text className="card__text">
            {"$" + unProducto.precio}
          </Card.Text>
          <Link to={'/item/' + unProducto.id}><Button className="card__button" variant="primary">Ver</Button> </Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default Item