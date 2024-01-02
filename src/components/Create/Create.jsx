import React, { useContext, useState } from 'react'
import './Create.css'
import { firebaseContext, userContext } from '../../store/Context'
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { redirect, useNavigate } from 'react-router-dom';
function Create() {
    const [pname, setPname] = useState('')
    const [pcategory, setPcategory] = useState('')
    const [pprice, setPprice] = useState('')
    const [pimg, setPimg] = useState(null)
    const { firebase } = useContext(firebaseContext)
    const { user } = useContext(userContext)
    const navigate = useNavigate()
    const handleSubmit = async () => {

        try {
            const date = new Date()
            const storage = getStorage(firebase)
            const db = getFirestore(firebase);
            const storageRef = ref(storage, 'images');
            const imgRef = await uploadBytes(storageRef, pimg)
            const imgUrl = await getDownloadURL(imgRef.ref)
            console.log(imgUrl);
            const docRef = await addDoc(collection(db, "products"), {
                uid: user.id,
                name: pname,
                category: pcategory,
                price: pprice,
                img: imgUrl,
                createdAt: date.toDateString()

            });
            console.log("Document written with ID: ", docRef.id);
            navigate('/')


        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>

            <card>
                <div className="centerDiv">
                    <div>
                        <label htmlFor="fname">Name</label>
                        <br />
                        <input
                            className="input"
                            type="text"
                            id="fname"
                            name="Name"
                            value={pname}
                            onChange={(e) => {
                                setPname(e.target.value)
                            }}
                        />
                        <br />
                        <label htmlFor="fname">Category</label>
                        <br />
                        <input
                            className="input"
                            type="text"
                            id="fname"
                            name="category"
                            value={pcategory}
                            onChange={(e) => {
                                setPcategory(e.target.value)
                            }}
                        />
                        <br />
                        <label htmlFor="fname">Price</label>
                        <br />
                        <input className="input" type="number" id="fname" name="Price" value={pprice} onChange={(e) => {
                            setPprice(e.target.value)
                        }} />
                        <br />
                    </div>
                    <br />
                    <img width="400px" height="400px" src={pimg ? URL.createObjectURL(pimg) : ''} />
                    <div>
                        <br />
                        <input type="file" onChange={(e) => {
                            setPimg(e.target.files[0])
                            //console.log(e.target.files[0]); 
                        }} />
                        <br />
                        <button className="uploadBtn" onClick={handleSubmit}>upload and Submit</button>
                    </div>
                </div>
            </card>
        </>
    )
}

export default Create