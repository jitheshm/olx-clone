import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'
import Signup from '../components/Login/Login'
import Post from '../components/Posts/Post'

function Home() {
    
    return (
        <>
           
            <Menu />
            <Post />
            <Footer />
            

        </>
    )
}

export default Home