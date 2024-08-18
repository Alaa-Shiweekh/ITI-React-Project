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


      <div className="row flex-nowrap" style={{
            marginTop: '120px'
          }}>
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100" >
            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto main-color text-decoration-none">
              <span className="fs-5 d-none d-sm-inline ">Menu</span>
            </a>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li className="nav-item">
                <Link to='/' className="nav-link align-middle px-0 text-black">
                  <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Home</span>
                </Link>
              </li>

              <li>
                <Link data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-grid" /> <span className="ms-1 d-none d-sm-inline">Products</span> </Link>
              </li>
              <li>
                <Link className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-people" /> <span className="ms-1 d-none d-sm-inline">Categories</span> </Link>
              </li>
            </ul>
            <hr />
          </div>
        </div>
        <div className="col py-3">
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
        </div>
      </div>





    </>
  )
}
