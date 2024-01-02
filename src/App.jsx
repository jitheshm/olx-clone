import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
// import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import { userContext } from './store/Context';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    console.log("iam user" + user);


  }, [user])

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (authuser) => {
      if (authuser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        if (authuser.displayName)
          setUser(authuser.displayName)

        // console.log(JSON.stringify(authuser));
        // ...
      } else {
        // User is signed out
        // ...
        setUser(null) 
      }
    });


  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <userContext.Provider value={{ user, setUser }}>

      <Header />
      <RouterProvider router={router} />

    </userContext.Provider>
  )
}

export default App