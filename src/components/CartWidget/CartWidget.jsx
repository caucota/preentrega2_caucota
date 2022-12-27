import React from "react";
import Cart from "../Cart/Cart";
import "./CartWidget.css"
import { useCartContext } from "../../Context/CartContext";

const CartWidget = () => {

    const {cantidad} = useCartContext();

    return (
        <div className="cartWidget">
            <p className="numero__cart">{cantidad}</p>
            <Cart />
        </div>
    );
};

export default CartWidget; 