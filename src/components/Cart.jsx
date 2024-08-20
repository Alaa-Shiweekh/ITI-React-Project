import React, { useContext } from 'react';
import { CartContext } from '../Context/CarContext.jsx';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
export default function Cart() {
  let navigate = useNavigate()
  let { cartItems, removeFromCart, total, setCartItems } = useContext(CartContext);


  let handleRemove = (productId) => {
    removeFromCart(productId);
  };
  let { isLogin} = useContext(AuthContext);
  return (
    <div className="container my-5">
      <h3 className='cart'>Your Cart</h3>
      <div className="row">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div className="col-md-12 d-flex justify-content-between align-items-center border-bottom py-3 secPro" key={item.id}>
              <div className="d-flex align-items-center">
                <img src={item.image} alt={item.name} style={{ width: '100px', marginRight: '15px' }} />
                <div>
                  <h5>{item.name}</h5>
                  <p>{item.price}.00$</p>
                </div>
              </div>
              <div className="d-flex align-items-center quantPrice justify-content-center gap-2">
                <button
                  type="button"
                  className="btn rounded-circle"
                  onClick={() => {
                    let updatedItems = cartItems.map(i =>
                      i.id === item.id ? { ...i, quantity: Math.max(i.quantity - 1, 1) } : i
                    );
                    setCartItems(updatedItems);
                  }}
                >
                  -
                </button>
                <span className="quant mr-3">{item.quantity}</span>
                <button
                  type="button"
                  className="btn rounded-circle"
                  onClick={() => {
                    let updatedItems = cartItems.map(i =>
                      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                    );
                    setCartItems(updatedItems);
                  }}
                >
                  +
                </button>
                <span className="ml-3">{item.price * item.quantity}$</span>
              </div>
              <td className='text-danger'><i class="fa-solid fa-trash " style={{ color: " #c14e5f" }} onClick={() => handleRemove(item.id)}></i>Remove</td>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <h4 className="my-5">Total: {total.toFixed(2)}$</h4>
      <button className='btn btn-link pro rounded-5 text-black' onClick={() => navigate('/shop')}><i class="fa-solid fa-shop"></i> Back To Shop</button>
      
      <button className='btn btn-link pro rounded-5 text-black' onClick={() => {!isLogin?navigate('/login'):navigate('/confirmpay')}}><i class="fa-solid fa-credit-card"></i> Proceed To Checkout</button>
     
      </div>
    );
  }
  
