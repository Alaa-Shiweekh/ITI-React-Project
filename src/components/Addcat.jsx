import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Addproduct() {
    let [inputcat, setInputcat] = useState({ name: "", key: "" })
    let navigate = useNavigate()
    function handelsubmit(e) {
        e.preventDefault()
        axios.post("http://localhost:3000/categories", inputcat)
            .then(res => {
                setInputcat(res.data);
                navigate("/dashboard")
            }).catch(error => {
                console.error('Error fetching categories:', error);
            });
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <form onSubmit={handelsubmit}>
                <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input type="text" className="form-control" onChange={e => setInputcat({ ...inputprod, name: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" className="form-control" onChange={e => setInputcat({ ...inputprod, price: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
