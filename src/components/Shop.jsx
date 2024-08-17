import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function Shop() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/product')
      .then(res => {
        console.log(res.data);
        setProducts(res.data)
      }
      )
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <section>
        <div className="header-cat d-flex justify-content-center align-items-center text-center">
          <div className="title">
            <h3 className='text-white' style={{ fontFamily: "cursive" }}>Shop</h3>
            <div className="row">
              <div className="col-md-3">
                <div className="img">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row d-flex">
            {products ? products.map((product) => (
              <div className="col-md-4 my-2 bg-transparent">
                <Link to={`/productdetails/${product.id}`}>
                  <div className="img">
                    <img src={product.image} className="w-100" />
                  </div>
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </Link>
              </div>

            )) : 'No Products'}
          </div>
        </div>
      </section>
    </>

  );
}