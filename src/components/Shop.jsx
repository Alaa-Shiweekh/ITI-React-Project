import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [title, setTitle] = useState('Shop');

  useEffect(() => {
    axios.get('http://localhost:3000/product')
      .then(res => {
        if (res.data && Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          console.error('Unexpected data structure:', res.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const handleCategoryClick = (categoryKey, categoryName) => {
    setSelectedCategory(categoryKey);
    setTitle(categoryName);
  };

  const countItemsInCategory = (categoryKey) => {
    return products.filter(product => product.category === categoryKey).length;
  };

  const categories = [
    { name: 'Rings', key: 'ring', imgSrc: '/Products/ringhead.jpg' },
    { name: 'Earrings', key: 'ear', imgSrc: '/Products/earheader.jpg' },
    { name: 'Bracelets', key: 'bracelet', imgSrc: '/Products/bracletheader.jpg' },
    { name: 'Necklaces', key: 'necklace', imgSrc: '/Products/neckhead.jpg' }
  ];

  const filteredProducts = selectedCategory
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
              <h4>Categories</h4>
              <ul>
                {categories.map(category => (
                  <li key={category.key} onClick={() => handleCategoryClick(category.key, category.name)}>
                    {category.name} ({countItemsInCategory(category.key)})
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-9">
              <div className="row d-flex">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div key={product.id} className="col-md-4 my-2 bg-transparent">
                      <Link to={`/productdetails/${product.id}`}>
                        <div className="img">
                          <img src={product.image} className="w-100" alt={product.name} />
                        </div>
                        <p>{product.name}</p>
                        <p>${Array.isArray(product.price) ? product.price[0] : product.price}</p>
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
