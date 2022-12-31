import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './ItemCount.css';


function ItemCount({ onAdd }) {
    const [count, setCount] = useState(0)
    const sumar = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }
    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <div className='card_button_container' style={{display: 'flex'}}>
                <Button className="card_button detail_button" onClick={restar}>-</Button>
                <div className='card__counter'>{count}</div>
                <Button className="card_button detail_button" onClick={sumar} >+</Button>
            </div>
            <Button className="card_button detail_button" onClick={() => { onAdd(count); setCount(0) }}>Agregar al Carrito</Button>
        </>
    )
}

/* import Button from 'react-bootstrap/Button';
import "./ItemCount.css";
import { useCartContext } from '../../Context/CartContext';

function ItemCount() {
    
    const {addProducto} = useCartContext();

    return (
        <div className='card__button__container'>
            <Button className="card__button detail__button">-</Button>
            <div className='card__counter'>0</div>
            <Button className="card__button detail__button" onClick={addProducto}>+</Button>
        </div>
    )
} */

/* 
function ItemCount() {
    const [contador, setContador] = useState(0);
    return (
        <div className='card__button__container'>
            <Button className="card__button detail__button" onClick={()=> contador > 0 ? setContador(contador - 1): contador}>-</Button>
            <div className='card__counter'>{contador}</div>
            <Button className="card__button detail__button" onClick={()=> setContador(contador + 1)}>+</Button>
        </div>
    )
} */

export default ItemCount;