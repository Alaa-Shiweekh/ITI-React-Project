import React from 'react'
import { Link } from 'react-router-dom'
import { removeproduct } from './Dashboard'

export default function Item({ prod }) {
    return (
        <tr>
            <td className='main-color' style={{ fontFamily: "cursive" }}>{prod.name}</td>
            <td>{prod.price}<span>.00</span><span className=' text-success'>$</span></td>
            <td><Link to={`/edit/${prod.id}`} className="btn btn-info">Update</Link></td>
            <td><button className='btn bg-danger' onClick={e => removeproduct(prod.id)}>Remove</button></td>
        </tr>
    )

}