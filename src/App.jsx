import React, { useContext, useEffect, useState } from 'react'
import Home from './pages/Home'
// import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import { userContext, productContext,firebaseContext } from './store/Context';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Create from './components/Create/Create';
import Sell from './pages/Sell';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import ViewPost from './components/ViewPost/ViewPost';
function App() {
  const [user, setUser] = useState(null)
  const [products, setProducts] = useState([])
  const {firebase}=useContext(firebaseContext)
  useEffect(() => {
    try {
      (async function () {
        const db = getFirestore(firebase);
        const querySnapshot = await getDocs(collection(db, "products"));
        const allpost = []
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
          allpost.push({
            ...doc.data(),
            id: doc.id
          })
        });
        setProducts(allpost)
      })()
    } catch (error) {
      console.log(error);
    }



  }, [])

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (authuser) => {
      if (authuser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        if (authuser.displayName)
          setUser({ name: authuser.displayName, id: authuser.uid })

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
    {
      path: '/create',
      element: <Sell />
    },
    {
      path:'/item/:id',
      element:<ViewPost/> 
    }
  ]);
  return (
    <userContext.Provider value={{ user, setUser }}>
      <productContext.Provider value={{ products, setProducts }} >
        <RouterProvider router={router} />

      </productContext.Provider>


    </userContext.Provider>
  )
}

export default App