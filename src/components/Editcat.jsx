import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
    let { id } = useParams();

    let navigate = useNavigate();

    let [inputcat, setInputcat] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/categories/${id}`)
            .then(res => {
                setInputcat(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        axios.put(`http://localhost:3000/categories/${id}`, inputcat)
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
                    <label className="form-label">Category Name</label>
                    <input type="text" className="form-control" value={inputcat.name} onChange={e => setInputcat({ ...inputcat, name: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Key</label>
                    <input type="text" className="form-control" value={inputcat.key} onChange={e => setInputcat({ ...inputcat, key: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}