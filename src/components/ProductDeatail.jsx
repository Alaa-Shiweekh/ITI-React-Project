import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../Context/CarContext.jsx';

export async function productDeatils(id) {
  try {
    let response = await axios.get(`http://localhost:3000/products/${id}`);
    let products = Array.isArray(response.data) ? response.data : [response.data];
    return products;
  } catch (err) {
    console.error(err);
  }
}

export default function ProductDeatail() {
  let { id } = useParams();
  let navigate = useNavigate();

  let { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  let [productd, setProductsd] = useState([]);

  async function getdetails() {
    try {
      let data = await productDeatils(id);
      setProductsd(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getdetails();
  }, []);

  let isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <div className="container my-5">
      <div className="row d-flex">
        {productd ? productd.map((product) => (
          <div className="col-md-6 my-2 bg-transparent" key={product.id}>
            <div className="img d-flex w-50 gap-3">
              <img src={product.image} className="w-100" alt={product.name} />
              <img src={product.imagehover} className="w-100" alt={product.name} />
            </div>
          </div>
        )) : 'No Products'}
        {productd ? productd.map((product) => (
          <div className="col-md-6">
            <h4>{product.name}</h4>
            <p className='text-muted'>{product.price}.00<span className=' text-success'>$</span></p>
            <p className=' text-secondary my-5'>{product.description}</p>
            <button className='btn'
              onClick={() => isInCart(product.id) ? removeFromCart(product.id) : addToCart(product)}>
              <i class="fa-solid fa-cart-plus"></i> {isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
            </button>
            {isInCart(product.id) && (
              <button className='btn btn-link view text-black' onClick={() => navigate('/cart')}>View Cart</button>
            )}
          </div>

        )) : ''}

      </div>
    </div>
  );
}