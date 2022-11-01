import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import { UserContextprovider } from './usercontext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <UserContextprovider> */}
    <BrowserRouter>
    <App />    
 </BrowserRouter>
    {/* </UserContextprovider> */}
 
 </React.StrictMode>
)
