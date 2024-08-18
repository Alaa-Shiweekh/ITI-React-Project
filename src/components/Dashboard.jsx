import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Item from './Item';
import { Link, useNavigate } from 'react-router-dom';
export function removeproduct(id) {
  axios.delete(`http://localhost:3000/product/${id}`).
    then(res => {
      navigate('/dashboard');
    }
    )
    .catch(err => {
      console.error(err);
    });
}
export default function Dashboard() {
  let [products, setProducts] = useState([]);
  let navigate = useNavigate()
  useEffect(() => {
    axios.get('http://localhost:3000/product')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <>
      <div className="product-table add">
        <div className="add-btn text-center">
          <button className='btn btn-warning'><Link to='/addproduct' className=' text-decoration-none text-black'>Add Product</Link></button>
        </div>
        <table class="table table-hover table-centered mb-0">
          <thead>
            <tr>
              <th style={{ fontFamily: "cursive" }}>Product</th>
              <th style={{ fontFamily: "cursive" }}>Price</th>
              <th style={{ fontFamily: "cursive" }}>Update</th>
              <th style={{ fontFamily: "cursive" }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map(prod => <Item prod={prod}></Item>)}
          </tbody>
        </table>
      </div>
    </>
  )
}
