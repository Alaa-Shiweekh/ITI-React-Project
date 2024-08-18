import React, { useContext } from 'react';
import { CartContext } from '../Context/CarContext.jsx';

export default function Cart() {
  const { cartItems, removeFromCart, total, setCartItems } = useContext(CartContext);


  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="container my-5">
      <h3>Your Cart</h3>
      <div className="row">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div className="col-md-12 d-flex justify-content-between align-items-center border-bottom py-3 secPro" key={item.id}>
              <div className="d-flex align-items-center">
                <img src={item.image} alt={item.name} style={{ width: '100px', marginRight: '15px' }} />
                <div>
                  <h5>{item.name}</h5>
                  <p>${item.price}</p>
                </div>
              </div>
              <div className="d-flex align-items-center quantPrice">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => {
                    const updatedItems = cartItems.map(i =>
                      i.id === item.id ? { ...i, quantity: parseInt(e.target.value) } : i
                    );
                    setCartItems(updatedItems); 
                  }}
                  className="form-control quant"  
                  style={{ width: '60px' }}
                />
                <span className="ml-3">${item.price * item.quantity}</span>
              </div>
              <button className="btn btn-danger remo" onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <h4 className="mt-4">Total: ${total.toFixed(2)}</h4>
      <button className='btn btn-link pro' onClick={() => navigate('/shop')}>Back To Shop</button>
      <button className='btn btn-link pro'>Proceed To Checkout</button>
      
    </div>
  );
}
