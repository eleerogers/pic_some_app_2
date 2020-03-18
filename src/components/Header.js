import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

// Full class name to use WHEN ITEMS IN CART:
// "ri-shopping-cart-fill ri-fw ri-2x"
//
// Full class name to use WHEN CART IS EMPTY:
// "ri-shopping-cart-line ri-fw ri-2x"


function Header() {
    const {cart} = useContext(Context);
    const classNameVar = cart.length > 0 ? "fill" : "line"
    
    return (
        <header>
            <Link to="/">
                <h2>Pic Some</h2>
            </Link>
            <Link to="/cart">
                <i className={`ri-shopping-cart-${classNameVar} ri-fw ri-2x`}></i>
            </Link>
        </header>
    )
}

export default Header;
