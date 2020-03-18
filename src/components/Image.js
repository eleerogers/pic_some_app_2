import React, {useContext} from "react"
import useHover from "../hooks/useHover"
import {Context} from "../Context"

function Image({className, pic}) {
    const {hover, onEnter, onLeave} = useHover();
    const {toggleFavorite, addToCart, cart, removeFromCart} = useContext(Context);

    return (
        <div onMouseEnter={onEnter} onMouseLeave={onLeave} className={`${className} image-container`}>
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
            {
                //1. Icons to render for the heart:
                //<i className="ri-heart-line favorite"></i>
                //<i className="ri-heart-fill favorite"></i>
                //
                //2. Icon to render for the plus:
                //<i className="ri-add-circle-line cart"></i>
                //Icon to use when item already in cart:
                //<i className="ri-shopping-cart-fill cart"></i>
                
                // img needs src
            }
            <img className="image-grid" alt="" src={pic.url} />
        </div>
    )
}

export default Image