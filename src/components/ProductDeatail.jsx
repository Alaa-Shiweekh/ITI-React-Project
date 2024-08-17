import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export async function productDeatils(id) {
  try {
    let response = await axios.get(`http://localhost:3000/product/${id}`);
    let products = Array.isArray(response.data) ? response.data : [response.data];
    return products;
  } catch (err) {
    console.error(err);
  }
}

export default function ProductDeatail() {
  let { id } = useParams();

  let [productd, setProductsd] = useState([]);
  async function getdetails() {
    try {
      let data = await productDeatils(id);
      setProductsd(data);
    } catch (err) {
      setError(err);
    }
  }

  useEffect(() => {
    getdetails();
  }, []);
  return (
    <div className="container my-5">
      <div className="row d-flex">
        {productd ? productd.map((product) => (
          <div className="col-md-4 my-2 bg-transparent" key={product.id}>
            <div className="img">
              <img src={product.image} className="w-100" />
            </div>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button className='btn'>Add to cart</button>
          </div>
        )) : 'No Products'}
      </div>
    </div>
  );
}