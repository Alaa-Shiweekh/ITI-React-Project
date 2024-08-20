import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';
import Catitem from './Catitem';
import { Link, useNavigate } from 'react-router-dom';

// Delete
export function removeproduct(id) {
  axios.delete(`http://localhost:3000/products/${id}`)
    .then(res => {
      navigate('/dashboard');
    })
    .catch(err => {
      console.error(err);
    });
}

export function removecat(id) {
  axios.delete(`http://localhost:3000/categories/${id}`)
    .then(res => {
      navigate('/dashboard');
    })
    .catch(err => {
      console.error(err);
    });
}

export default function Dashboard() {
  let navigate = useNavigate();
  let [products, setProducts] = useState([]);
  let [categories, setCategories] = useState([]);
  let [display, setDisplay] = useState('products');

  // Get Data
  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3000/categories')
      .then(res => {
        setCategories(res.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <>
      <div className="d-flex my-2">
        <div className="col-md-3">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto main-color text-decoration-none">
                <span className="fs-5 d-none d-sm-inline">Menu</span>
              </a>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                  <Link to='/' className="nav-link align-middle px-0 text-black">
                    <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Home</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setDisplay('products')} className="nav-link px-0 align-middle text-black">
                    <i className="fs-4 bi-grid" /> <span className="ms-1 d-none d-sm-inline">Products</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setDisplay('categories')} className="nav-link px-0 align-middle text-black">
                    <i className="fs-4 bi-people" /> <span className="ms-1 d-none d-sm-inline">Categories</span>
                  </Link>
                </li>

              </ul>
              <hr />
            </div>
          </div>
        </div>

        {display === 'products' && (
          <div className='bg-white col-md-9'>
            <div className="product-table add" >
              <div className="add-btn text-center">
                <button className='btn rounded-5'><Link to='/addproduct' className=' text-decoration-none text-black'><i class="fa-solid fa-plus"></i>Add Product</Link></button>
              </div>
              <table class="table table-hover table-centered mb-0">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(prod => <Item prod={prod} key={prod.id} />)}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {display === 'categories' && (
          <div className='bg-white col-md-9'>
            <div className="cat-table add" >
              <div className="add-btn text-center">
                <button button className='btn rounded-5'><Link to='/addcategory' className=' text-decoration-none text-black'><i class="fa-solid fa-plus"></i>Add Category</Link></button>
              </div>
              <table class="table table-hover table-centered mb-0">
                <thead>
                  <tr>
                    <th style={{ fontFamily: "cursive" }}>Category</th>
                    <th style={{ fontFamily: "cursive" }}>Key</th>
                    <th style={{ fontFamily: "cursive" }}>Update</th>
                    <th style={{ fontFamily: "cursive" }}>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map(cat => <Catitem cat={cat} key={cat.id} />)}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}