import React, {useContext} from "react"
import useHover from "../hooks/useHover"
import {Context} from "../Context"

function Image({className, pic}) {
    const [hover, ref] = useHover();
    const {toggleFavorite, addToCart, cart, removeFromCart} = useContext(Context);

    return (
        <div ref={ref} className={`${className} image-container`}>
            {   
                pic.isFavorite
                ? <i onClick={() => toggleFavorite(pic.id)} className="ri-heart-fill favorite"></i>
                : hover && <i onClick={() => toggleFavorite(pic.id)} className="ri-heart-line favorite"></i> 
            }
            {   
                cart.some(picture => picture.id === pic.id) 
                ? <i onClick={() => removeFromCart(pic.id)} className="ri-shopping-cart-fill cart"></i>
                : hover && <i onClick={() => addToCart(pic)} className="ri-add-circle-line cart"></i>
            }
            <img className="image-grid" alt="" src={pic.url} />
        </div>
    )
}

export default Image