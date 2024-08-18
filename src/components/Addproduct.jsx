import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Addproduct() {
    let [inputprod,setInputprod] = useState({name:"",price:""})
    let navigate = useNavigate()
    function handelsubmit(){
        e.preventDefault()
        axios.post("http://localhost:3000/product",inputprod)
        .then(res=>{
            setInputprod(res.data);
            navigate("/dashboard")
        }).catch(error => {
            console.error('Error fetching products:', error);
          });
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <form onSubmit={handelsubmit}>
                <div className="mb-3">
                    <label  className="form-label">Product Name</label>
                    <input type="text" className="form-control" onChange={e=>setInputprod({...inputprod,name:e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Price</label>
                    <input type="number" className="form-control"onChange={e=>setInputprod({...inputprod,price:e.target.value})}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
