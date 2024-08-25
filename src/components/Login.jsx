import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
export default function Login() {
  let { setLogin } = useContext(AuthContext)
  let [message, setMessage] = useState('')
  let navigate = useNavigate();
  function handelLogin(values) {
    axios.get("http://localhost:3000/users", values)
      .then(res => {
        console.log(res.data);
        res.data.map(user => {
          if (user.email === values.email) {
            if (user.password === values.password) {
              user.isAdmin = (user.email === 'admin@gmail.com' && user.password === 'admin123');
              localStorage.setItem('User', JSON.stringify(user))
              setLogin(user)
              navigate('/');
            } else {
              setMessage("wrong password or email !");
            }
          } else if (values.email == "") {
            setMessage('email not found');
          }
        });
      })
      .catch((err) => {
        console.log(err);
        setMessage('Registration failed. Please try again.');
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
    <div class="container my-5">
      <h4 className='text-center my-5 register'>Login</h4>
      <div class="row justify-content-center">

        <div class="col-md-6">
          {message ? <div class="alert alert-danger text-center" role="alert">
            {message}
          </div> : ''}
          <form onSubmit={formik.handleSubmit}>
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
            <div className="d-flex flex-column gap-3">
              <button type="submit" class="btn"><i class="fa-solid fa-gem"></i> Login</button>
              <button type="submit" className="btn"><Link to='/register' className=" text-dark text-decoration-none">Create an account</Link></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}