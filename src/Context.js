import React, {useState, useEffect} from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [pics, setPics] = useState([]);

  useEffect(() => {
      fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then(res => res.json())
        .then(pictures => setPics(pictures))
  }, [])

  return (
    <Context.Provider value={{pics}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}