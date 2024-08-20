import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Shop() {
  let [products, setProducts] = useState([]);
  let [categories, setCategories] = useState([]);
  let [selectedCategory, setSelectedCategory] = useState('');
  let [title, setTitle] = useState('Shop');

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(res => {
        if (res.data && Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          console.error('Unexpected data structure:', res.data);
        }
      })
      .catch(err => console.log(err));

    axios.get('http://localhost:3000/categories')
      .then(res => {
        if (res.data && Array.isArray(res.data)) {
          setCategories(res.data);
        } else {
          console.error('Unexpected data structure:', res.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  let handleCategoryClick = (categoryKey, categoryName) => {
    setSelectedCategory(categoryKey);
    setTitle(categoryName);
  };

  let countItemsInCategory = (categoryKey) => {
    return products.filter(product => product.category === categoryKey).length;
  };

  let filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <>
      <section>
        <div className="header-cat" style={{ position: 'relative' }}>
          <div style={{
            background: 'url(/products/header-background.jpg) no-repeat center center',
            backgroundSize: 'cover',
            padding: '100px 0',
            textAlign: 'center',
          }}>
            <h3 className='text-white' style={{
              fontFamily: 'Cursive, cursive',
              fontSize: '2.5rem',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              {title}
            </h3>
            <div className="category-images d-flex justify-content-center mt-4" style={{ marginTop: '20px' }}>
              {categories.map(category => (
                <div key={category.key} className="category-item mx-2" style={{ textAlign: 'center' }}>
                  <Link to="#" onClick={() => handleCategoryClick(category.key, category.name)} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img src={category.imgSrc} alt={category.name} className="img-fluid rounded-circle" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                    <p className='text-white' style={{ marginTop: '10px', fontFamily: 'Cursive, cursive' }}>{category.name}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              <h4 style={{ fontFamily: "cursive" }}>Categories</h4>
              <ul className=' list-unstyled'>
                {categories.map(category => (
                  <li className='text-muted mt-4' key={category.key} onClick={() => handleCategoryClick(category.key, category.name)}>
                    {category.name} ({countItemsInCategory(category.key)})
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-9">
              <div className="row d-flex">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div className="col-md-4 my-2 bg-transparent">
                      <div className="img">
                        <img src={product.image} className="w-100" alt={product.name} />
                      </div>
                      <p>{product.name}</p>
                      <p>{product.price}.00<span className=' text-success'>$</span></p>
                      <p className=' text-secondary'>{product.description.slice(0, 50)}....</p>
                      <Link to={`/productdetails/${product.id}`} className=' text-decoration-none text-black readmore'>
                        <p>Read More <i class="fa-solid fa-angles-right fa-sm"></i></p>
                      </Link>

                    </div>
                  ))
                ) : (
                  <p>No Products</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
