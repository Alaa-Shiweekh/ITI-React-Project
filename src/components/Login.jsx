import React, { useContext } from 'react';
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
    <div className="login ">
      <div className="container w-50  py-5">
        <div className="bg-white hight">
          <div className="header p-5  position-relative mx-auto">
            <button className="close-btn position-absolute end-0 rounded-circle border-0 top-0" onClick={() => window.history.back()}>✕</button>
            <p className=' position-absolute bottom-0'>Sign In</p>
          </div>

          <form onSubmit={formik.handleSubmit} className=' mt-3'>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email*"
                id='email'
                className='form-control'
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email ?
                <div className="text-sm text-danger rounded-lg bg-body-tertiary p-4 text-center" role="alert">
                  <span className="font-medium text-center">{formik.errors.email}</span>
                </div> : ''}
            </div>
            <div className="form-group ">
              <input
                type="password"
                placeholder="Password*"
                id='password'
                className='form-control'
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password && formik.touched.password ?
                <div className="text-sm text-danger rounded-lg bg-body-tertiary p-4 text-center" role="alert">
                  <span className="font-medium text-center">{formik.errors.password}</span>
                </div> : ''}
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column gap-2 my-5">
              <button type="submit" className="btn bg-black text-white px-5 py-2">Sign In</button>
              <button type="submit" className="btn  px-2 py-2"><Link to='/register' className=" text-dark text-decoration-none">Create An Account</Link></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}