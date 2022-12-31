import React from "react";
import './ErrorItem.css';
import {useNavigate} from 'react-router-dom';

const ErrorItem = () =>{
    const navigate = useNavigate();

    function volverInicio (){
        navigate('/')
    }
    return(
        <div className='container__error__item'>
            <h1 className='texto__error'>Error: Producto inexistente</h1>
            <button onClick={volverInicio}>Continuar</button>
        </div>
    )
}

export default ErrorItem;