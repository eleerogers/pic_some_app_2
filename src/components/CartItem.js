import React, {useContext} from "react"
import useHover from "../hooks/useHover";
import {Context} from "../Context";

function CartItem({item}) {
  const [hover, ref] = useHover(null);
  const {removeFromCart} = useContext(Context);
  const classVar = hover ? "fill" : "line"

  return (
    <div className="cart-item">
      <i
        onClick={() => removeFromCart(item.id)}
        ref={ref} 
        className={`ri-delete-bin-${classVar}`}>
      </i>
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  )
}

export default CartItem