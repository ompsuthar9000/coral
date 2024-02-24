import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Appconext from './Utils/Context/AppContext'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Appconext>
    <App />
    </Appconext>
  
  </React.StrictMode>,
)
