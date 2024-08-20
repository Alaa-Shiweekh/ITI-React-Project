import React, { useContext } from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { CartContext } from '../Context/CarContext.jsx';
export default function Navbar() {
    let { isLogin, logout } = useContext(AuthContext);
    let { cartItems } = useContext(CartContext);
    let totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    return (
        <nav className="navbar navbar-expand-lg p-4 ">
            <div className="container">
                <img src={logo} className='logo' />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex gap-3">
                        <li className="nav-item nav-active">
                            <NavLink to={'/'} className='text-decoration-none text-black'>Home</NavLink>
                        </li>
                        <li className="nav-item nav-active">
                            <NavLink to={'/shop'} className='text-decoration-none text-black'>Shop</NavLink>
                        </li>
                        {isLogin && isLogin.isAdmin && (
                            <li className="nav-item nav-active">
                                <NavLink to={'/dashboard'} className='text-decoration-none text-black'>Dashboard</NavLink>
                            </li>
                        )}
                        <li className="nav-item dropdown nav-hover">
                            <NavLink className="dropdown-toggle text-decoration-none text-black page" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Page
                            </NavLink>
                            <ul className="dropdown-menu p-1">
                                <li><NavLink to={'/contact'} className='text-decoration-none text-black'>Contact Us</NavLink></li>
                                <li><NavLink to={'/about'} className='text-decoration-none text-black'>About Us</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="d-flex gap-3 align-items-center text-center">
                        <i className="fa-solid fa-magnifying-glass fa-lg" />
                        {!isLogin ? (
                            <NavLink to={'/login'} className="text-decoration-none text-black user"><i className="fa-regular fa-user fa-lg" /></NavLink>
                        ) : (
                            <>
                                <span className="text-decoration-none text-black user">Hi <span className="text-success">{isLogin.name}</span></span>
                                <i onClick={logout} className="fa-solid fa-right-from-bracket"></i>
                            </>
                        )}
                        <i className="fa-regular fa-heart position-relative fa-lg">
                            <span className="position-absolute top-0 translate-middle badge rounded-circle main-bg mx-1 p-1">
                                0
                            </span>
                        </i>
                        <NavLink to='/cart' className='text-black'>
                            <i className="fa-solid fa-bag-shopping position-relative fa-lg">
                                <span className="position-absolute top-0 translate-middle badge rounded-circle main-bg mx-1 p-1">
                                    {totalQuantity}
                                </span>
                            </i>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}