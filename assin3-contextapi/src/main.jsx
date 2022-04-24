import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {ThimProvider} from "./context/Thim"

ReactDOM.render(
  <React.StrictMode>
    <ThimProvider>
    <App />
    </ThimProvider>
  </React.StrictMode>,document.getElementById('root')).render(

  )

