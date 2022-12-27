import React from "react";
import Cart from "../Cart/Cart";
import "./CartWidget.css"
import { useCartContext } from "../../Context/CartContext";

const CartWidget = () => {

    const {cart} = useCartContext();
    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.cantidad,0)
    }    

    return (
        <div className="cartWidget">
            <p className="numero__cart">{cartQuantity()}</p>
            <Cart />
        </div>
    );
};

export default CartWidget; 