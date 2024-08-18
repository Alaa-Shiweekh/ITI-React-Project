import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

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

  const handleCategoryClick = (categoryKey) => {
    setSelectedCategory(categoryKey);
  };

  const countItemsInCategory = (categoryKey) => {
    return products.filter(product => product.category === categoryKey).length;
  };

  const categories = [
    { name: 'Rings', key: 'ring' },
    { name: 'Earrings', key: 'ear' },
    { name: 'Bracelets', key: 'bracelet' },
    { name: 'Necklaces', key: 'necklace' }
  ];

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <>
      <section>
        <div className="header-cat d-flex justify-content-center align-items-center text-center">
          <div className="title">
            <h3 className='text-white' style={{ fontFamily: "cursive" }}>Shop</h3>
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              <h4>Categories</h4>
              <ul>
                {categories.map(category => (
                  <li key={category.key} onClick={() => handleCategoryClick(category.key)}>
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
