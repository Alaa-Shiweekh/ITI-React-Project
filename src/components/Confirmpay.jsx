import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CarContext.jsx';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

export default function ConfirmPay() {
  let { cartItems, total } = useContext(CartContext);
  let [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  let navigate = useNavigate();

  let handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    
    let templateParams = {
        to_name: 'Adena', 
        from_name: `${formData.firstName} ${formData.lastName}`, 
        message: `
          Order Details:
          -------------------
          Name: ${formData.firstName} ${formData.lastName}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Country: ${formData.country}
          City: ${formData.city}
          Address: ${formData.address}
          Street Number: ${formData.streetNumber}

          Order Items:
          -------------------
          ${cartItems.map(item => `${item.name} - Quantity: ${item.quantity} - Price: ${(item.price * item.quantity).toFixed(2)}$`).join('\n')}

          Total: $${total.toFixed(2)}
        `
    };

    
    emailjs.send('service_vh88xpc', 'template_h1falmn', templateParams, '5OGsmYsg8yVWGdx0O')
        .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
            alert('Your Order is Placed Successfully');
            navigate('/shop'); 
        }, (error) => {
            console.error('Failed to send email:', error);
            alert('Failed to send Email, Please Try Again!');
        });
};


  return (
    <div className="container my-5">
      <div className="row confirm">
        <div className="col-md-8">
          <h3 className='cart'>Check Out</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName" className='lbl'>First Name</label>
              <input 
                type="text" 
                className="form-control field" 
                id="firstName" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className='lbl'>Last Name</label>
              <input 
                type="text" 
                className="form-control field" 
                id="lastName" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className='lbl'>Phone</label>
              <input 
                type="text" 
                className="form-control field" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="country" className='lbl'>Country</label>
              <input 
                type="text" 
                className="form-control field" 
                id="country" 
                name="country" 
                value={formData.country} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="city" className='lbl'>City</label>
              <input 
                type="text" 
                className="form-control field" 
                id="city" 
                name="city" 
                value={formData.city} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="address" className='lbl'>Address</label>
              <input 
                type="text" 
                className="form-control field" 
                id="address" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="streetNumber" className='lbl'>Street Number</label>
              <input 
                type="text" 
                className="form-control field" 
                id="streetNumber" 
                name="streetNumber" 
                value={formData.streetNumber} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className='lbl'>Email</label>
              <input 
                type="email" 
                className="form-control field" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <button type="submit" className="btn text-black mt-3 rounded-3">Place Order</button>
          </form>
        </div>
        <div className="col-md-4 rec">
          <h3 className='order cart'>Your Order</h3>
          <ul className="list-group">
            {cartItems.map(item => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                <div>
                  <h5>{item.name}</h5>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between">
              <strong>Total</strong>
              <strong>${total.toFixed(2)}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}



