import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/global.css"
import App from "./App"
import { legacy_createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import reducers from "./reducers/index.js"

let store = legacy_createStore(reducers, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
