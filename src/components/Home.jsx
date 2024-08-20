import React, { useEffect, useState } from 'react';
import slider1 from '../assets/slider1.png'
import slider2 from '../assets/slider2.png'
import slider3 from '../assets/slider3.png'
import banner from '../assets/banner.jpg'

import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Home() {
  let [trend, setTrend] = useState([])
  let [products, setProducts] = useState([]);
  let [categories, setCategories] = useState([]);
  let [selectedCategory, setSelectedCategory] = useState('');
  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(res => {
        let rings = res.data.filter(prod => prod.category === 'ring')
        setTrend(rings)
      })
      .catch(err => console.log(err)
      )
    axios.get('http://localhost:3000/products')
      .then(res => {
        console.log('Products:', res.data);
        setProducts(res.data);
      })
      .catch(err => console.log(err));

    axios.get('http://localhost:3000/categories')
      .then(res => {
        console.log('Categories:', res.data);
        setCategories(res.data);
      })
      .catch(err => console.log(err));
  }, []);


  let filteredProducts = selectedCategory
    ? products.filter(products => products.category === selectedCategory)
    : products;
  let firstThree = trend.slice(0, 3);
  return (
    <>
      <header classname=" vh-100 w-100">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" >
              <img src={slider1} className="d-block w-100 cars" alt="slider1" />
            </div>
            <div className="carousel-item" >
              <img src={slider2} className="d-block w-100 cars" alt="slider2" />
            </div>
            <div className="carousel-item" >
              <img src={slider3} className="d-block w-100 cars" alt="slider3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>
      <section className='top-trending'>
        <div className="container p-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-3">
              <div className="conten text-white">
                <h3>Top Trending</h3>
                <p>With more than 30 years of experience,
                  providing high-end jewelry lines, especially
                  women's gold jewelry</p>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row d-flex align-items-center justify-content-center">
                {firstThree.map(ring => (
                  <div className="col-md-3 d-flex align-items-center">
                    <Link to={`/productdetails/${ring.id}`} className='text-decoration-none text-white'>
                      <img src={ring.image} alt={ring.name} className='imf-fluid w-100' />
                      <p>{ring.name}</p>
                      <p>Price: {ring.price}.00$</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container p-5">
          <div className="row">
            {categories.map(category => (
              <div className="col-md-3 text-center">
                <Link to='/shop' className=' text-decoration-none text-black'>
                  <img src={category.img} className='img-fluid my-2 catimg' onClick={() => handleCategoryClick(category.key)} />
                  <p className='my-2'>{category.name}</p>
                  <p>{filteredProducts.filter(product => product.category === category.key).length} ITEMS</p></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section >
        <div className="container-fluid">
          <div className="row banner d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="container p-5">
                <div className="banner-content my-5">
                  <h3 className='my-3'>Chic Petal Perfection</h3>
                  <p>Jewelry is favored by both men and women because it shows luxury & class; own aesthetic taste, affirming position…</p>
                </div>
                <Link className='btn text-decoration-none text-black' to='/shop'>Shop Now</Link>
              </div>
            </div>
            <div className="col-md-6">
              <img src={banner} className='w-100' />

            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <section className='my-5 mx-auto'>
            <div className="container  p-5">
              <div className="row">
                <div className="col-md-3 d-flex justify-content-center align-items-center gap-3">
                  <div className="icon">
                    <i class="fa-solid fa-truck-fast fa-2x"></i>
                  </div>
                  <div className="text">
                    <h6>Free Shipping</h6>
                    <p className='text-muted'>Free shipping for orders from $200</p>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center align-items-center gap-3">
                  <div className="icon">
                    <i class="fa-solid fa-box fa-2x"></i>
                  </div>
                  <div className="text">
                    <h6>Easy returns</h6>
                    <p className='text-muted'>Refund within 14 days</p>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center align-items-center gap-3">
                  <div className="icon">
                    <i class="fa-solid fa-shield-halved fa-2x"></i>
                  </div>
                  <div className="text">
                    <h6>Secure payment</h6>
                    <p className='text-muted'>Payment information is safe</p>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center align-items-center gap-3">
                  <div className="icon">
                    <i class="fa-regular fa-comments fa-2x"></i>
                  </div>
                  <div className="text">
                    <h6>Customer care</h6>
                    <p className='text-muted'>Outstanding premium support</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}