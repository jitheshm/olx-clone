import React, { useContext, useEffect, useState } from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { firebaseContext, productContext } from '../../store/Context';
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
function Post() {

  const { firebase } = useContext(firebaseContext)
  const { products } = useContext(productContext)
  const navigate = useNavigate()



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
                <div className="card" onClick={() => {
                  navigate(`/item?id=${product.id}`)
                }}>
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