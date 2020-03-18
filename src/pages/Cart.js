import React, {useContext, useState} from "react"
import CartItem from "../components/CartItem";
import {Context} from "../Context";

function Cart() {
    const [ordering, setOrdering] = useState(false);
    const {cart, emptyCart} = useContext(Context);
    const items = cart.map(item => <CartItem key={item.id} item={item} />)
    const buttonTxt = ordering ? "Ordering..." : "Place Order"

    function handlePlaceOrder() {
        setOrdering(true);
        setTimeout(() => {
            emptyCart();
            console.log("Items purchased!");
            setOrdering(false);
        }, 3000)
    }

    const filledCart = 
        <div>
            <h1>Check out</h1>
            {items}
            <p className="total-cost">Total: {(cart.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            <div className="order-button">
                <button onClick={handlePlaceOrder}>{buttonTxt}</button>
            </div>
        </div>
        
    return (
        <main className="cart-page">
            {
                cart.length > 0 ?
                filledCart
                : <h3>No items in cart</h3>
            }
        </main>
    )
}

export default Cart