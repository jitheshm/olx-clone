import React, { useContext, useState } from 'react'
import logo from '../../assets/OLX-Symbol.png'
import './Signup.css'
import { firebaseContext,userContext } from '../../store/Context'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { collection, addDoc, getFirestore } from "firebase/firestore";
function Signup({ login, setLogin, signup, setSignup }) {
    const [name, setName] = useState('')
    const [phoneno, setPhoneno] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { firebase } = useContext(firebaseContext)
    const { user, setUser } = useContext(userContext)

    const handleSubmit = async (e) => {
        const auth = getAuth(firebase);
        const db = getFirestore(firebase);
        try {
            e.preventDefault()




            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(auth.currentUser, {
                displayName: name
            })
            setUser(name)
            setSignup(false)
            console.log(userCredential);
            const docRef = await addDoc(collection(db, "users"), {
                id: userCredential.user.uid,
                name: name,
                phoneno: phoneno,
                email: email


            });
            console.log("Document written with ID: ", docRef.id); 


        } catch (error) {
            console.log(error);
            const errorCode = error.code;
            const errorMessage = error.message;
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