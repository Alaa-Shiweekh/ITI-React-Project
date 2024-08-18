import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
    let { id } = useParams();

    let navigate = useNavigate();

    let [inputprod, setInputprod] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/product/${id}`)
            .then(res => {
                setInputprod(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        axios.put(`http://localhost:3000/product/${id}`, inputprod)
            .then(res => {
                navigate('/dashboard');
            }
            )
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input type="text" className="form-control" value={inputprod.name} onChange={e => setInputprod({ ...inputprod, name: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" className="form-control" value={inputprod.price} onChange={e => setInputprod({ ...inputprod, price: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}