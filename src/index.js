import React from "react"
import ReactDOM from "react-dom"
import {ContextProvider} from "./Context"
import {BrowserRouter as Router} from "react-router-dom"
import './styles.css'

import App from "./App"

ReactDOM.render(
  <Router>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Router>,
  document.getElementById("root"))
