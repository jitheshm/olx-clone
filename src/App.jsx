import React from 'react'
import Home from './pages/Home'
// import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

export default App