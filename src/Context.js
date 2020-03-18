import React, {useState, useEffect} from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [pics, setPics] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
      fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then(res => res.json())
        .then(pictures => setPics(pictures))
  }, [])

  function toggleFavorite(id) {
    setPics(pics => pics.map(pic => {
      return pic.id === id
        ? {...pic, isFavorite: !pic.isFavorite}
        : pic
    }))
  }

  function addToCart(pic) {
    setCart(cart => [...cart, pic])
  }

  function removeFromCart(id) {
    setCart(cart => {
      return cart.filter(item => item.id !== id)
    })
  }

  function emptyCart() {
    setCart([])
  }

  return (
    <Context.Provider value={{pics, toggleFavorite, addToCart, cart, removeFromCart, emptyCart}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}