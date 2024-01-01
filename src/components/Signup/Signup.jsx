import React, { useContext, useState } from 'react'
import logo from '../../assets/OLX-Symbol.png'
import './Signup.css'
import { firebaseContext } from '../../store/firebaseContext'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
    const [name, setName] = useState('')
    const [phoneno, setPhoneno] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { firebase } = useContext(firebaseContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        
        
        const auth = getAuth(firebase);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                console.log(userCredential);
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    return (
        <div className='loginContainer'>
            <div className='col-4 login pt-4 m-auto'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='mt-5'>
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <h5>Name</h5>
                        <input type="text" style={{ height: '40px' }} value={name} onChange={(e) => {
                            setName(e.target.value)
                        }} />
                        <h5 className='mt-3'>Phoneno</h5>
                        <input type="number" style={{ height: '40px' }} value={phoneno} onChange={(e) => {
                            setPhoneno(e.target.value)
                        }} />
                        <h5 className='mt-3'>Email</h5>
                        <input type="email" style={{ height: '40px' }} value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                        <h5 className='mt-3'>Password</h5>
                        <input type="password" style={{ height: '40px' }} value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                        <button type='submit' className='col-11 mt-4 btn ' style={{ height: '50px', backgroundColor: '#002F34', color: '#ffffff' }}>submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup