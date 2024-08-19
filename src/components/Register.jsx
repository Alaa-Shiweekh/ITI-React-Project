import React from 'react';
import { Link } from 'react-router-dom';
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
        values.isAdmin = (values.email === 'admin@gmail.com' && values.password === 'admin123');
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
    <div className="login">
      <div className="container w-50 py-5">
        <div className="bg-white height">
          <div className="header p-5  position-relative mx-auto">
            <button className="close-btn position-absolute end-0 rounded-circle border-0 top-0" onClick={() => window.history.back()}>✕</button>
            <p className=' position-absolute bottom-0'>Create An Account</p>
          </div>
          <form onSubmit={formik.handleSubmit} className=' mt-3'>
            <div className="form-group">
              <input
                onBlur={formik.handleBlur}
                type="text"
                placeholder="Username*"
                id='name'
                className='form-control'
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
                className='form-control'
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
                className='form-control'
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
                className='form-control'
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
                className='form-control'
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
            <div className="d-flex justify-content-center align-items-center flex-column gap-2 my-5">
              <button type="submit" className="btn bg-black text-white px-5 py-2">Register</button>
              <button type="submit" className="btn  px-1 py-2"><Link to='/login' className=" text-dark text-decoration-none">Already have an account</Link></button>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
}