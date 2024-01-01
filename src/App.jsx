import React from 'react'
// import './App.css'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Posts from './components/Posts/Post'
import Footer from './components/Footer/Footer'
import Signup from './components/Signup/Signup'
function App() {
  return (
    <>
      <Header />
      <Menu />
      <Posts/>
      <Footer/>
      <Signup/>
    </>
  )
}

export default App