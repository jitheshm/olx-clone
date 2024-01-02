import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { firebaseContext } from './store/Context.jsx';
import {app as firebase} from './firebase/config.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <firebaseContext.Provider value={{firebase}}>

      <App />
    </firebaseContext.Provider>
  </React.StrictMode>,
)
