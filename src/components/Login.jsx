import React, { useContext } from 'react';
import './Login.css';
import sign from '../assets/sign.jpg';
import { useFormik } from 'formik';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

export default function Login() {
  let { login } = useContext(AuthContext);
  let navigate = useNavigate();

  function handelLogin(values) {
    axios.get("http://localhost:3000/users", values)
      .then(res => {
        console.log(res.data);
        res.data.map(user => {
          if (user.email === values.email) {
            if (user.password === values.password) {
              user.isAdmin = (user.email === 'admin@gmail.com' && user.password === 'admin123');
              login(user);
              navigate('/');
            } else {
              alert("wrong pass");
            }
          } else if (values.email == "") {
            alert('email not found');
          }
        });
      })
      .catch((err) => {
        console.log(err);
        alert('Registration failed. Please try again.');
      });
  }

  function validation(values) {
    let errors = {};

    if (!values.email)
      errors.email = 'Email is Required';
    else if (!/^[a-zA-Z0-9.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/i.test(values.email))
      errors.email = 'Email is not valid';
    if (!values.password)
      errors.password = 'Password is Required';

    return errors;
  }

  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: validation,
    onSubmit: handelLogin
  });

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <button className="close-btn" onClick={() => window.history.back()}>✕</button>
        <div className="login-header">
          <img src={sign} alt="Login Banner" />
          <span>Create An Account</span>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email*"
              id='email'
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email ?
              <div className="text-sm text-danger rounded-lg bg-body-tertiary p-4 text-center" role="alert">
                <span className="font-medium text-center">{formik.errors.email}</span>
              </div> : ''}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password*"
              id='password'
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password ?
              <div className="text-sm text-danger rounded-lg bg-body-tertiary p-4 text-center" role="alert">
                <span className="font-medium text-center">{formik.errors.password}</span>
              </div> : ''}
          </div>
          <button type="submit" className="Login-btn">Login</button>
        </form>
        <p className='text-center'>Don`t Have Account?<Link to='/register' className=" text-dark">Register</Link></p>
      </div>
    </div>
  );
}