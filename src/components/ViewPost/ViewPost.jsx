import React, { useContext, useEffect, useState } from 'react'
import './ViewPost.css';
import { productContext } from '../../store/Context';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { firebaseContext } from '../../store/Context'
function ViewPost() {
    const { products, setProducts } = useContext(productContext)
    const [searchParams] = useSearchParams();
    const { firebase } = useContext(firebaseContext)
    const [seller, setSeller] = useState({})
    // console.log(searchParams.get('id'));
    const { id } = useParams()
    console.log(id);
    const post = products.find((ele) => ele.id === id)
    console.log(post);
    useEffect(() => {
        (async function () {
            if (post) {
                const db = getFirestore(firebase);
                const q = query(collection(db, "users"), where("id", "==", post.uid));

                const querySnapshot = await getDocs(q);
                console.log(querySnapshot);
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    setSeller(doc.data())
                });
            }
        })()


    }, [products])

    return (
        <div className="viewParentDiv">
            <div className="imageShowDiv">
                <img
                    src={post && post.img}
                    alt=""
                />
            </div>
            <div className="rightSection">
                <div className="productDetails">
                    <p>&#x20B9; {post && post.price} </p>
                    <span>{post && post.name}</span>
                    <p>{post && post.category}</p>
                    <span>{post && post.createdAt}</span>
                </div>
                <div className="contactDetails">
                    <p>Seller details</p>
                    <p>{seller.name}</p>
                    <p>{seller.phoneno}</p>
                </div>
            </div>
        </div>
    )
}

export default ViewPost