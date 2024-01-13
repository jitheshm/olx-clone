import React, { useState } from 'react'
import logo from '../../assets/OLX-Symbol.png'
import './Login.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
function Login({ login, setLogin, signup, setSignup }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [logError,setLogError]=useState(false)
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const auth = getAuth();

            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            setLogin(false)

        } catch (error) {
            console.log(error);
            setLogError(true)
        }
    }
    return (
        <div className='loginContainer'>
            <div className='col-4 login pt-4 m-auto'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='mt-5'>
                    <form action="" method="post" onSubmit={handleSubmit}>
                        {
                            logError&&<div>invalid username or password</div>
                        }
                        <h5>Enter the Email</h5>
                        <input type="text" style={{ height: '40px' }} value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                        <h5 className='mt-3'>Enter the Password</h5>
                        <input type="password" style={{ height: '40px' }} value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                        <button type='submit' className='col-11 mt-4 btn ' style={{ height: '50px', backgroundColor: '#002F34', color: '#ffffff' }}>submit</button>

                    </form>
                </div>
                <div>
                    <button onClick={() => {
                        setLogin(false)
                        setSignup(true)
                    }} className='btn mt-4'>Create an Account</button>
                </div>
            </div>
        </div>
    )
}

export default Login