import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { firebaseContext } from './store/firebaseContext.jsx';
import {app as firebase} from './firebase/config.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <firebaseContext.provider value={{firebase}}>

      <App />
    </firebaseContext.provider>
  </React.StrictMode>,
)
