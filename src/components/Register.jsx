import React from 'react';
import './Login.css';
import sign from '../assets/sign.jpg';
import { useFormik } from 'formik';
import axios from 'axios';

export default function Register() {
  function handelRegister(values) {
    axios.get("http://localhost:3000/users").then((data) => {
      let user = data.data;
      console.log(data);
      
      let email = user.map(users => users.email)
      console.log(email);
      if (email.includes(values.email)) {
        alert('Email already exists. Please try another one.');
      }
      else {

        axios.post("http://localhost:3000/users", values)
          .then((res) => {
            console.log(res.data);
            alert('Registration successful.');
          })
          .catch((err) => {
            console.log(err);
            alert('Registration failed. Please try again.');
          });
      }
    })
  }


  function validation(values) {
    let errors = {};
    if (!values.name)
      errors.name = 'Name is Required';
    else if (!/^[A-Z][a-z]{3,5}$/.test(values.name))
      errors.name = 'Name must start with a capital letter, 3-5 small letters';
    if (!values.email)
      errors.email = 'Email is Required';
    else if (!/^[a-zA-Z0-9.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/i.test(values.email))
      errors.email = 'Email is not valid';
    if (!values.phone)
      errors.phone = 'Phone is Required';
    else if (!/^[0-9]{11}$/.test(values.phone))
      errors.phone = 'Phone number must be 11 digits';
    if (!values.password)
      errors.password = 'Password is Required';
    if (values.password !== values.repassword)
      errors.repassword = 'Passwords do not match';
    return errors;
  }

  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      repassword: '',
      phone: ''
    },
    validate: validation,
    onSubmit: handelRegister
  });

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <button className="close-btn" onClick={() => window.history.back()}>✕</button>
        <div className="login-header">
          <img src={sign} alt="Register Banner" />
          <span>Create An Account</span>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <input
              onBlur={formik.handleBlur}
              type="text"
              placeholder="Username*"
              id='name'
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name ?
              <div className="text-sm text-danger rounded-lg bg-body-tertiary p-4 text-center" role="alert">
                <span className="font-medium text-center">{formik.errors.name}</span>
              </div> : ''}
          </div>

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
              type="tel"
              placeholder="Phone*"
              id='phone'
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            {formik.errors.phone && formik.touched.phone ?
              <div className="text-sm text-danger rounded-lg bg-body-tertiary p-4 text-center" role="alert">
                <span className="font-medium text-center">{formik.errors.phone}</span>
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

          <div className="form-group">
            <input
              type="password"
              placeholder="rePassword*"
              id='repassword'
              value={formik.values.repassword}
              onChange={formik.handleChange}
            />
            {formik.errors.repassword && formik.touched.repassword ?
              <div className="text-sm text-danger rounded-lg bg-body-tertiary p-4 text-center" role="alert">
                <span className="font-medium text-center">{formik.errors.repassword}</span>
              </div> : ''}
          </div>

          <button type="submit" className="register-btn">Register</button>
        </form>
      </div>
    </div>
  );
}