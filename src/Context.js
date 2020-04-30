import React, {useState, useEffect} from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [pics, setPics] = useState(JSON.parse(localStorage.getItem("pics")) || []);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  useEffect(() => {
      if (!pics.length) {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
          .then(res => res.json())
          .then(pictures => setPics(pictures))
      }
  }, [pics.length])

  useEffect(() => {
    localStorage.setItem("pics", JSON.stringify(pics));
  }, [pics])
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

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