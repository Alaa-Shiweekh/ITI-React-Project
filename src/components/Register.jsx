import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
export default function Register() {
  let { setLogin } = useContext(AuthContext)
  let [message, setMessage] = useState('')
  let [success, setSuccess] = useState('')
  let navigate = useNavigate()
  function handelRegister(values) {
    axios.get("http://localhost:3000/users").then((data) => {
      let user = data.data;
      let email = user.map(users => users.email)
      if (email.includes(values.email)) {
        setMessage('Email already exists. Please try another one.')
      }
      else {
        values.isAdmin = (values.email === 'admin@gmail.com' && values.password === 'admin123');
        axios.post("http://localhost:3000/users", values)
          .then((res) => {
            setSuccess('Registration successful.');
            localStorage.setItem('User', JSON.stringify(res.data))
            setLogin(res.data)
            navigate('/')

          })
          .catch((err) => {
            setMessage('Registration failed. Please try again.');
          });
      }
    })
  }
  function validation(values) {
    let errors = {};
    if (!values.name)
      errors.name = 'Name is Required';
    else if (!/^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(values.name))
      errors.name = 'Name must start with a capital letter';
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
    <div class="container my-3">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h4 className='text-center my-5 register'>Register</h4>
          {message ? <div class="alert alert-danger" role="alert">
            {message}
          </div> : ''}
          {success ? <div class="alert  alert-success" role="alert">
            {success}
          </div> : ''}
          <form onSubmit={formik.handleSubmit}>
            <div class="mb-5">
              <input value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} id="name" class="form-control mb-3 border-0 border-bottom" placeholder="Enter your name" />
              {formik.errors.name && formik.touched.name ? <div class="alert alert-danger" role="alert">
                {formik.errors.name}
              </div> : ''}
            </div>
            <div class="mb-5">

              <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} id="email" class="form-control mb-3 border-0 border-bottom" placeholder="Enter your email" />
              {formik.errors.email && formik.touched.email ? <div class="alert alert-danger" role="alert">
                {formik.errors.email}
              </div> : ''}
            </div>
            <div class="mb-5">

              <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" id="password" class="form-control mb-3 border-0 border-bottom" placeholder="Enter your password" />
              {formik.errors.password && formik.touched.password ? <div class="alert alert-danger" role="alert">
                {formik.errors.password}
              </div> : ''}
            </div>
            <div class="mb-5">

              <input value={formik.values.repassword} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" id="repassword" class="form-control mb-3 border-0 border-bottom" placeholder="Confirm your password" />
              {formik.errors.repassword && formik.touched.repassword ? <div class="alert alert-danger" role="alert">
                {formik.errors.repassword}
              </div> : ''}
            </div>
            <div class="mb-5">

              <input value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" id="phone" class="form-control mb-3 border-0 border-bottom" placeholder="Enter your phone number (123-456-7890)" />
              {formik.errors.phone && formik.touched.phone ? <div class="alert alert-danger" role="alert">
                {formik.errors.phone}
              </div> : ''}
            </div>

            <div className="d-flex flex-column gap-3">
              <button type="submit" class="btn"><i class="fa-solid fa-gem"></i> Register</button>
              <button type="submit" className="btn"><Link to='/login' className=" text-dark text-decoration-none">Already have an account</Link></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}