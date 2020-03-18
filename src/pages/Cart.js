import React, {useContext} from "react"
import CartItem from "../components/CartItem";
import {Context} from "../Context";

function Cart() {
    const {cart} = useContext(Context);
    const items = cart.map(item => <CartItem key={item.id} item={item} />)
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {items}
        <p className="total-cost">Total: {(cart.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart