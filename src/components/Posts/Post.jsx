import React, { useContext, useEffect, useState } from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { firebaseContext } from '../../store/Context';
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
function Post() {
  const [products, setProducts] = useState([])
  const { firebase } = useContext(firebaseContext)
  useEffect(() => {
    try {
      (async function () {
        const db = getFirestore(firebase);
        const querySnapshot = await getDocs(collection(db, "products"));
        const allpost=[]
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
          allpost.push({
            ...doc.data(),
            id:doc.id
          })
        });
        setProducts(allpost)
      })()
    } catch (error) {
      console.log(error);
    }



  }, [])
 


  return (
    <div className="postParentDiv">

      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {
            products.map((product) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="card">
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                    <img src={product.img} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {product.price}</p>
                    <span className="kilometer">{product.category}</span>
                    <p className="name"> {product.name}</p>
                  </div>
                  <div className="date">
                    <span>{product.createdAt}</span>
                  </div>
                </div>
              )

            })
          }

        </div>
      </div>
    </div>
  );
}

export default Post;