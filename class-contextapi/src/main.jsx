import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {CardContextProvider} from "./contex/CardContext"
import {LangContextProvider} from "./contex/LanguageContext";
ReactDOM.render(
  <React.StrictMode>
    <CardContextProvider>
      <LangContextProvider>
      <App />
      </LangContextProvider>
   </CardContextProvider>
  </React.StrictMode>,
  document.getElementById('root')).render()

